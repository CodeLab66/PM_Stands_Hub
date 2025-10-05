// Core AI Integration and Main Application Logic
class AIIntegration {
    constructor() {
        this.apiKey = '';
        this.baseURL = 'https://api.openai.com/v1/chat/completions';
    }

    async callAIAPI(query, selectedStandards) {
        if (!this.apiKey) {
            throw new Error('API key not set');
        }

        // Build context from selected standards
        let context = this.buildContext(selectedStandards);
        
        const prompt = this.buildPrompt(query, selectedStandards, context);

        const requestBody = {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a project management expert specializing in PMBOK 7, PRINCE2, and ISO 21500 standards. Provide accurate, comprehensive information with specific references to the standards."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 1500,
            temperature: 0.7
        };

        const response = await fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    buildContext(selectedStandards) {
        let context = '';
        selectedStandards.forEach(standard => {
            const standardKey = standard.toLowerCase().replace(' ', '').replace('7', '');
            if (window.bookContent && window.bookContent[standardKey]) {
                const book = window.bookContent[standardKey];
                context += `\n\n${standard} Content:\n`;
                // Include first chapter content as context
                context += book.chapters[0].content.replace(/<[^>]*>/g, '').substring(0, 1000);
            }
        });
        return context;
    }

    buildPrompt(query, selectedStandards, context) {
        return `
            You are a project management expert specializing in ${selectedStandards.join(', ')} standards.
            
            Context from the standards:
            ${context}
            
            User Question: ${query}
            
            Please provide a comprehensive answer focusing on the selected standards: ${selectedStandards.join(', ')}.
            If multiple standards are selected, compare and contrast their approaches.
            Provide specific references to the standards where possible.
            Structure your response clearly and include practical examples.
        `;
    }

    formatAIResponse(response) {
        return response
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .split('\n')
            .map(paragraph => {
                if (paragraph.trim() === '') return '';
                if (paragraph.trim().startsWith('- ') || paragraph.trim().startsWith('* ')) {
                    return `<li>${paragraph.substring(2)}</li>`;
                }
                if (paragraph.match(/^\d+\./)) {
                    return `<li>${paragraph.substring(paragraph.indexOf('.') + 2)}</li>`;
                }
                return `<p>${paragraph}</p>`;
            })
            .join('')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    }

    async testConnection() {
        try {
            const testPrompt = "Respond with just 'OK' if you can read this.";
            const response = await this.callAIAPI(testPrompt, ['PMBOK 7']);
            return response.includes('OK');
        } catch (error) {
            console.error('API test failed:', error);
            return false;
        }
    }
}

// Process Generator Class
class ProcessGenerator {
    constructor(aiIntegration) {
        this.ai = aiIntegration;
    }

    async generateProcess(parameters) {
        const { projectType, teamSize, duration, riskLevel, standards } = parameters;
        
        const prompt = `Create a custom project management process framework for:
        - Project type: ${projectType}
        - Team size: ${teamSize}
        - Duration: ${duration}
        - Risk level: ${riskLevel}/5
        - Standards to incorporate: ${standards.join(', ')}

        Please provide a structured process framework with clear phases, key activities, and recommendations tailored to these parameters.`;

        try {
            const process = await this.ai.callAIAPI(prompt, standards);
            return this.formatProcessDocument(process, parameters);
        } catch (error) {
            throw new Error(`Process generation failed: ${error.message}`);
        }
    }

    formatProcessDocument(process, parameters) {
        let formattedProcess = process.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        formattedProcess = formattedProcess
            .replace(/^##### (.*)$/gm, '<b>$1</b>')
            .replace(/^#### (.*)$/gm, '<b>$1</b>')
            .replace(/^### (.*)$/gm, '<b>$1</b>')
            .replace(/^## (.*)$/gm, '<b>$1</b>')
            .replace(/^# (.*)$/gm, '<b>$1</b>');

        return `
            <div id="processDocument" style="background: #fff; padding: 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: auto;">
                <h1 style="text-align:center; color: #2c3e50; margin-bottom:18px;">Custom Project Management Process Framework</h1>
                <div style="margin-bottom:12px;">
                    <table style="width:100%; border-collapse:collapse; font-size:1.08em;">
                        <tr><td style="padding:4px 0;"><b>Project Type:</b></td><td style="padding:4px 0;">${parameters.projectType}</td></tr>
                        <tr><td style="padding:4px 0;"><b>Team Size:</b></td><td style="padding:4px 0;">${parameters.teamSize}</td></tr>
                        <tr><td style="padding:4px 0;"><b>Project Duration:</b></td><td style="padding:4px 0;">${parameters.duration}</td></tr>
                        <tr><td style="padding:4px 0;"><b>Risk Level:</b></td><td style="padding:4px 0;">${parameters.riskLevel}/5</td></tr>
                        <tr><td style="padding:4px 0;"><b>Consulted Standards:</b></td><td style="padding:4px 0;">${parameters.standards.join(', ')}</td></tr>
                    </table>
                </div>
                <hr style="margin:18px 0;">
                <h2 style="margin-bottom:12px; color:#34495e;">AI-Generated Process Framework</h2>
                <div style="font-size:1.08em; line-height:1.7;">${formattedProcess.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    }

    downloadAsPDF(elementId, filename) {
        if (window.jspdf && window.jspdf.jsPDF) {
            const doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'a4' });
            const element = document.getElementById(elementId);
            
            doc.html(element, {
                callback: function (pdf) {
                    pdf.save(filename);
                },
                x: 32,
                y: 32
            });
        } else {
            throw new Error('PDF export requires jsPDF library.');
        }
    }
}

// Main Application Controller
class AppController {
    constructor() {
        this.ai = new AIIntegration();
        this.processGenerator = new ProcessGenerator(this.ai);
        this.state = {
            currentSection: 'dashboard',
            apiKey: '',
            savedItems: []
        };
    }

    init() {
        this.loadSettings();
        this.setupEventListeners();
        this.showSection('dashboard');
    }

    loadSettings() {
        const apiKey = localStorage.getItem('apiKey');
        if (apiKey) {
            this.state.apiKey = apiKey;
            this.ai.apiKey = apiKey;
            document.getElementById('apiKey').value = apiKey;
        }

        const savedItems = localStorage.getItem('savedItems');
        if (savedItems) {
            this.state.savedItems = JSON.parse(savedItems);
        }
    }

    setupEventListeners() {
        // AI Search
        document.getElementById('aiSearchBtn').addEventListener('click', () => this.performSearch());
        document.getElementById('aiSearchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });

        // Global Search
        document.getElementById('globalSearchBtn').addEventListener('click', () => this.performGlobalSearch());
        document.getElementById('globalSearch').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performGlobalSearch();
        });

        // Process Generation
        document.getElementById('generateProcess').addEventListener('click', () => this.generateProcess());

        // Settings
        document.getElementById('apiKey').addEventListener('change', (e) => {
            this.state.apiKey = e.target.value;
            this.ai.apiKey = e.target.value;
            localStorage.setItem('apiKey', this.state.apiKey);
        });

        document.getElementById('testApiBtn').addEventListener('click', () => this.testAPIConnection());
        document.getElementById('saveSettings').addEventListener('click', () => this.saveSettings());

        // Risk slider
        const riskSlider = document.getElementById('riskLevel');
        const riskValue = document.getElementById('riskValue');
        riskSlider.addEventListener('input', () => {
            riskValue.textContent = riskSlider.value;
        });
    }

    async performSearch() {
        const query = document.getElementById('aiSearchInput').value.trim();
        if (!query) {
            this.showToast('Please enter a search query');
            return;
        }

        if (!this.state.apiKey) {
            this.showToast('Please set your AI API key in Settings first');
            this.showSection('settings');
            return;
        }

        const selectedStandards = this.getSelectedStandards();
        if (selectedStandards.length === 0) {
            this.showToast('Please select at least one standard to search');
            return;
        }

        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = this.getLoadingHTML();

        try {
            const response = await this.ai.callAIAPI(query, selectedStandards);
            this.displaySearchResults(query, response, selectedStandards, resultsContainer);
            this.showToast('AI search completed!');
        } catch (error) {
            console.error('AI API Error:', error);
            resultsContainer.innerHTML = this.getErrorHTML(error);
        }
    }

    async generateProcess() {
        const parameters = this.getProcessParameters();
        const standards = this.getProcessStandards();
        
        if (standards.length === 0) {
            this.showToast('Please select at least one standard');
            return;
        }

        parameters.standards = standards;

        const output = document.getElementById('processOutput');
        output.innerHTML = this.getLoadingHTML('AI is generating your custom process framework');

        try {
            const processHTML = await this.processGenerator.generateProcess(parameters);
            output.innerHTML = processHTML + this.getPDFButtonHTML();
            
            // Setup PDF download
            document.getElementById('downloadPdfBtn').addEventListener('click', () => {
                try {
                    this.processGenerator.downloadAsPDF('processDocument', 'Custom_Project_Management_Process_Framework.pdf');
                    this.showToast('PDF download started!');
                } catch (error) {
                    this.showToast('PDF export requires jsPDF library.');
                }
            });

            this.saveGeneratedProcess(parameters, processHTML);
            this.showToast('Process generated successfully!');
        } catch (error) {
            console.error('Process generation error:', error);
            output.innerHTML = this.getErrorHTML(error);
        }
    }

    getProcessParameters() {
        return {
            projectType: document.getElementById('projectType').value,
            teamSize: document.getElementById('teamSize').value,
            duration: document.getElementById('projectDuration').value,
            riskLevel: document.getElementById('riskLevel').value
        };
    }

    getProcessStandards() {
        const standards = [];
        if (document.getElementById('processPmbok').checked) standards.push("PMBOK 7");
        if (document.getElementById('processPrince2').checked) standards.push("PRINCE2");
        if (document.getElementById('processIso').checked) standards.push("ISO 21500");
        return standards;
    }

    getSelectedStandards() {
        const standards = [];
        if (document.getElementById('pmbokCheck').checked) standards.push('PMBOK 7');
        if (document.getElementById('prince2Check').checked) standards.push('PRINCE2');
        if (document.getElementById('isoCheck').checked) standards.push('ISO 21500');
        return standards;
    }

    displaySearchResults(query, aiResponse, selectedStandards, container) {
        const formattedResponse = this.ai.formatAIResponse(aiResponse);
        
        let html = `<h3>AI Analysis: "${query}"</h3>`;
        html += `<p><strong>Standards analyzed:</strong> ${selectedStandards.join(', ')}</p>`;
        
        html += `
            <div class="result-item">
                <div class="result-header">
                    <span class="result-standard">AI Analysis</span>
                    <span class="result-section">Based on ${selectedStandards.join(', ')}</span>
                </div>
                <div class="ai-response">
                    ${formattedResponse}
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                    <span>Generated by AI</span>
                    <button class="btn btn-outline save-result" data-content='${JSON.stringify({
                        standard: selectedStandards.join(', '),
                        query: query,
                        solution: aiResponse,
                        type: "ai_response"
                    }).replace(/'/g, "&#39;")}'>
                        <i class="fas fa-bookmark"></i> Save
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        
        // Add save functionality
        document.querySelector('.save-result').addEventListener('click', (e) => {
            const content = JSON.parse(e.target.getAttribute('data-content').replace(/&#39;/g, "'"));
            this.saveItem(content);
        });
    }

    async testAPIConnection() {
        if (!this.state.apiKey) {
            this.showToast('Please set your API key first');
            return false;
        }

        const button = document.getElementById('testApiBtn');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Testing...';
        button.disabled = true;

        try {
            const isConnected = await this.ai.testConnection();
            if (isConnected) {
                this.showToast('API connection successful!');
            } else {
                this.showToast('API connection failed. Please check your API key.');
            }
            return isConnected;
        } catch (error) {
            this.showToast('API connection failed. Please check your API key and network connection.');
            return false;
        } finally {
            button.innerHTML = originalText;
            button.disabled = false;
        }
    }

    saveItem(item) {
        this.state.savedItems.push({
            ...item,
            id: Date.now(),
            savedAt: new Date().toLocaleString()
        });
        
        localStorage.setItem('savedItems', JSON.stringify(this.state.savedItems));
        this.showToast('Item saved successfully!');
    }

    saveGeneratedProcess(parameters, content) {
        this.saveItem({
            type: 'process',
            title: `Custom Process for ${parameters.projectType} Project`,
            content: content,
            parameters: parameters,
            timestamp: new Date().toISOString()
        });
    }

    saveSettings() {
        localStorage.setItem('apiKey', this.state.apiKey);
        this.showToast('Settings saved successfully!');
    }

    performGlobalSearch() {
        const query = document.getElementById('globalSearch').value.trim();
        if (!query) {
            this.showToast('Please enter a search query');
            return;
        }

        this.showSection('search');
        document.getElementById('aiSearchInput').value = query;
        this.performSearch();
    }

    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        this.state.currentSection = sectionId;
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    getLoadingHTML(message = 'AI is thinking') {
        return `
            <div class="ai-response">
                <div class="ai-thinking">
                    <i class="fas fa-robot"></i>
                    <span>${message}</span>
                    <div class="ai-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
    }

    getErrorHTML(error) {
        return `
            <div class="ai-response">
                <div style="color: var(--danger);">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>Error:</strong> ${error.message}
                </div>
                <p>Please check your API key and try again.</p>
            </div>
        `;
    }

    getPDFButtonHTML() {
        return `
            <div style="text-align:center; margin-top:18px;">
                <button class="btn btn-primary" id="downloadPdfBtn"><i class="fas fa-file-pdf"></i> Download as PDF</button>
            </div>
        `;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
    window.app.init();
});