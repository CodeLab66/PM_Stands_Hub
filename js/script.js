// Comparison Engine and Insights Dashboard
class ComparisonEngine {
    constructor() {
        this.comparisonData = {
            risk: {
                pmbok: {
                    title: "PMBOK 7 - Risk Management",
                    content: `<p><span class="highlight-similar">Risk is defined as an uncertain event or condition that, if it occurs, has a positive or negative effect on one or more project objectives. This comprehensive definition acknowledges both threats and opportunities.</span></p>
                            <p><strong>Detailed Approach:</strong> PMBOK 7 revolutionizes risk management by shifting from process-based to principles-based approach. It integrates risk throughout eight performance domains rather than treating it as standalone processes. The standard emphasizes:</p>
                            <ul>
                                <li><strong>Contextual Tailoring:</strong> Risk approaches must be adapted to project complexity, organizational culture, and stakeholder expectations</li>
                                <li><strong>Proactive Engagement:</strong> Continuous stakeholder involvement in risk identification and response planning</li>
                                <li><strong>Value Protection & Creation:</strong> Balancing threat mitigation with opportunity exploitation to maximize project value</li>
                                <li><strong>Cultural Integration:</strong> Building risk-aware organizations where risk management becomes inherent in decision-making</li>
                            </ul>
                            <p><span class="highlight-unique">Unlike traditional approaches, PMBOK 7 doesn't prescribe specific risk processes but provides guiding principles that can be adapted to any project context.</span></p>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Establish Risk Governance:</strong> Create risk management framework aligned with organizational strategy and project objectives</li>
                                <li><strong>Continuous Risk Identification:</strong> Implement ongoing risk identification through stakeholder workshops, assumption analysis, and environmental scanning</li>
                                <li><strong>Adaptive Risk Responses:</strong> Develop flexible response strategies that can evolve as project context changes</li>
                                <li><strong>Integrated Monitoring:</strong> Embed risk monitoring within regular project reviews and performance assessments</li>
                                <li><strong>Organizational Learning:</strong> Capture risk lessons and integrate into organizational knowledge base</li>
                            </ol>`,
                    color: "#3498db"
                },
                prince2: {
                    title: "PRINCE2 - Risk Management",
                    content: `<p><span class="highlight-similar">Risk is defined as an uncertain event or set of events that, should it occur, will have an effect on the achievement of objectives. This definition focuses on uncertainty's impact on project goals.</span></p>
                            <p><strong>Detailed Approach:</strong> PRINCE2 approaches risk management through a highly structured, procedure-based methodology embedded within the project management framework. Key characteristics include:</p>
                            <ul>
                                <li><strong>Five-Step Procedure:</strong> Systematic approach covering identification, assessment, planning, implementation, and communication</li>
                                <li><strong>Theme Integration:</strong> Risk management is a core theme running throughout all project processes and stages</li>
                                <li><strong>Role Clarity:</strong> Clear definition of risk management responsibilities for Project Board, Project Manager, and Team Managers</li>
                                <li><strong>Product Focus:</strong> Risk management activities are documented in management products like Risk Register and Issue Register</li>
                                <li><strong>Business Case Alignment:</strong> All risk activities must support and protect the business case justification</li>
                            </ul>
                            <p><span class="highlight-different">PRINCE2's structured approach ensures consistency and accountability but may require adaptation for highly dynamic environments.</span></p>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Establish Risk Management Strategy:</strong> Define risk management approach, scales, and roles in the project initiation documentation</li>
                                <li><strong>Systematic Risk Identification:</strong> Conduct regular risk identification workshops at stage boundaries and during project progress reviews</li>
                                <li><strong>Quantified Risk Assessment:</strong> Use probability-impact matrices and expected monetary value analysis for objective assessment</li>
                                <li><strong>Formal Response Planning:</strong> Develop detailed risk responses with assigned owners, actions, and timelines</li>
                                <li><strong>Continuous Risk Communication:</strong> Maintain transparent risk reporting through highlight reports and stage assessments</li>
                            </ol>`,
                    color: "#9b59b6"
                },
                iso: {
                    title: "ISO 21500 - Risk Management",
                    content: `<p><span class="highlight-similar">Risk is defined as an uncertain event or set of events which, should it occur, will influence achievement of objectives. This aligns with international risk management standards.</span></p>
                            <p><strong>Detailed Approach:</strong> ISO 21500 provides a standardized, process-oriented framework for risk management that can be integrated with organizational management systems. Key features include:</p>
                            <ul>
                                <li><strong>Process-Based Framework:</strong> Clear risk management processes that can be mapped to organizational procedures</li>
                                <li><strong>ISO 31000 Alignment:</strong> Direct compatibility with ISO 31000 Risk Management guidelines for enterprise-wide consistency</li>
                                <li><strong>Adaptability:</strong> Framework can be scaled and adapted to projects of any size or complexity</li>
                                <li><strong>International Best Practices:</strong> Incorporates globally recognized risk management principles and practices</li>
                                <li><strong>Integration Focus:</strong> Designed to integrate with quality, environmental, and safety management systems</li>
                            </ul>
                            <p><span class="highlight-different">ISO 21500 provides a neutral, standardized approach that organizations can customize without being tied to a specific methodology.</span></p>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Risk Management Planning:</strong> Establish risk management plan aligned with organizational risk policy and project objectives</li>
                                <li><strong>Structured Risk Identification:</strong> Use multiple techniques including brainstorming, Delphi method, and SWOT analysis</li>
                                <li><strong>Comprehensive Risk Analysis:</strong> Combine qualitative and quantitative methods for thorough risk understanding</li>
                                <li><strong>Systematic Risk Treatment:</strong> Implement risk responses following the avoid, transfer, mitigate, or accept framework</li>
                                <li><strong>Integrated Risk Monitoring:</strong> Continuously monitor risks and adjust responses based on changing project conditions</li>
                            </ol>`,
                    color: "#2ecc71"
                }
            },
            quality: {
                pmbok: {
                    title: "PMBOK 7 - Quality Management",
                    content: `<p><span class="highlight-similar">Quality is defined as the degree to which a set of inherent characteristics fulfills requirements. This definition emphasizes meeting stakeholder needs and expectations.</span></p>
                            <p><strong>Detailed Approach:</strong> PMBOK 7 transforms quality management from conformance to specifications to delivering value and satisfaction. The approach includes:</p>
                            <ul>
                                <li><strong>Value-Centric Quality:</strong> Quality is measured by value delivery rather than just specification compliance</li>
                                <li><strong>Stakeholder Satisfaction:</strong> Focus on understanding and meeting stakeholder quality expectations</li>
                                <li><strong>Prevention over Inspection:</strong> Emphasize building quality in rather than inspecting defects out</li>
                                <li><strong>Continuous Improvement:</strong> Integrated learning and improvement throughout project lifecycle</li>
                                <li><strong>Tailored Approaches:</strong> Quality methods adapted to project context and complexity</li>
                            </ul>
                            <p><span class="highlight-unique">PMBOK 7's quality approach is integrated across performance domains rather than being a separate knowledge area.</span></p>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Define Quality Expectations:</strong> Collaborate with stakeholders to establish clear quality criteria and success measures</li>
                                <li><strong>Implement Quality-Focused Planning:</strong> Integrate quality considerations into all project planning activities</li>
                                <li><strong>Build Quality into Processes:</strong> Design project processes that inherently produce quality outcomes</li>
                                <li><strong>Continuous Quality Validation:</strong> Regularly verify that deliverables meet stakeholder value expectations</li>
                                <li><strong>Organizational Quality Culture:</strong> Foster environment where quality is everyone's responsibility</li>
                            </ol>`,
                    color: "#3498db"
                },
                prince2: {
                    title: "PRINCE2 - Quality Management",
                    content: `<p><span class="highlight-similar">Quality is defined as the degree to which a set of inherent characteristics fulfills requirements, with strong emphasis on product quality.</span></p>
                            <p><strong>Detailed Approach:</strong> PRINCE2 approaches quality management through a structured, product-focused methodology with clear quality responsibilities. Key elements include:</p>
                            <ul>
                                <li><strong>Product-Based Planning:</strong> Quality planning centered around project products and their quality criteria</li>
                                <li><strong>Quality Theme Integration:</strong> Quality management is a core theme running throughout all project processes</li>
                                <li><strong>Clear Quality Responsibilities:</strong> Defined roles for quality management including Project Manager and Team Managers</li>
                                <li><strong>Quality Review Technique:</strong> Structured approach for verifying product quality against defined criteria</li>
                                <li><strong>Quality Register:</strong> Formal tracking of quality activities and outcomes</li>
                            </ul>
                            <p><span class="highlight-different">PRINCE2's product-focused approach ensures that quality is built into deliverables from the beginning.</span></p>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Define Quality Expectations:</strong> Document customer quality expectations and acceptance criteria in Project Product Description</li>
                                <li><strong>Develop Quality Management Approach:</strong> Create comprehensive quality strategy including standards, techniques, and responsibilities</li>
                                <li><strong>Implement Product Descriptions:</strong> Create detailed product descriptions with quality criteria for all key deliverables</li>
                                <li><strong>Conduct Quality Reviews:</strong> Perform formal quality reviews at key project stages and product completion</li>
                                <li><strong>Maintain Quality Records:</strong> Document all quality activities and outcomes in the Quality Register</li>
                            </ol>`,
                    color: "#9b59b6"
                },
                iso: {
                    title: "ISO 21500 - Quality Management",
                    content: `<p><span class="highlight-similar">Quality is defined as the degree to which a set of inherent characteristics fulfills requirements, with focus on process consistency and customer satisfaction.</span></p>
                            <p><strong>Detailed Approach:</strong> ISO 21500 provides a process-based quality management framework aligned with ISO 9001 quality management systems. Key features include:</p>
                            <ul>
                                <li><strong>Process Standardization:</strong> Consistent quality processes that can be integrated across the organization</li>
                                <li><strong>ISO 9001 Alignment:</strong> Direct compatibility with ISO 9001 quality management system requirements</li>
                                <li><strong>Customer Focus:</strong> Emphasis on understanding and meeting customer quality requirements</li>
                                <li><strong>Fact-Based Decision Making:</strong> Quality decisions based on data and performance metrics</li>
                                <li><strong>Continual Improvement:</strong> Structured approach for ongoing quality enhancement</li>
                            </ul>
                            <p><span class="highlight-different>ISO 21500's strength lies in its integration capability with organizational quality management systems.</span></p>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Quality Planning:</strong> Develop quality management plan aligned with organizational quality policy</li>
                                <li><strong>Quality Assurance Implementation:</strong> Establish processes to ensure quality standards are met consistently</li>
                                <li><strong>Quality Control Execution:</strong> Implement monitoring and measurement activities to verify quality compliance</li>
                                <li><strong>Performance Measurement:</strong> Track quality metrics and performance indicators</li>
                                <li><strong>Continuous Improvement:</strong> Use quality audits and reviews to identify improvement opportunities</li>
                            </ol>`,
                    color: "#2ecc71"
                }
            },
            stakeholder: {
                pmbok: {
                    title: "PMBOK 7 - Stakeholder Management",
                    content: `<p><span class="highlight-similar">Stakeholders are individuals, groups, or organizations that may affect, be affected by, or perceive themselves to be affected by a decision, activity, or outcome of a project.</span></p>
                            <p><strong>Detailed Approach:</strong> PMBOK 7 elevates stakeholder management to a performance domain, emphasizing continuous engagement and value delivery. Key aspects include:</p>
                            <ul>
                                <li><strong>Relationship Building:</strong> Focus on developing and maintaining productive stakeholder relationships</li>
                                <li><strong>Value Co-creation:</strong> Collaborate with stakeholders to define and deliver value</li>
                                <li><strong>Adaptive Engagement:</strong> Tailor engagement strategies based on stakeholder needs and project context</li>
                                <li><strong>Inclusive Decision Making:</strong> Involve stakeholders in key decisions affecting project outcomes</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Stakeholder Identification:</strong> Continuously identify and analyze stakeholders throughout project lifecycle</li>
                                <li><strong>Engagement Planning:</strong> Develop tailored engagement strategies for different stakeholder groups</li>
                                <li><strong>Relationship Development:</strong> Build trust and collaboration through regular communication and involvement</li>
                                <li><strong>Feedback Integration:</strong> Incorporate stakeholder feedback into project decisions and adjustments</li>
                                <li><strong>Value Measurement:</strong> Regularly assess and demonstrate value delivery to stakeholders</li>
                            </ol>`,
                    color: "#3498db"
                },
                prince2: {
                    title: "PRINCE2 - Stakeholder Management",
                    content: `<p><span class="highlight-similar">Stakeholders are defined as those with an interest or role in the project or those impacted by the project.</span></p>
                            <p><strong>Detailed Approach:</strong> PRINCE2 approaches stakeholder management through structured communication and defined roles. Key elements include:</p>
                            <ul>
                                <li><strong>Role-Based Approach:</strong> Clear definition of stakeholder roles (Business, User, Supplier)</li>
                                <li><strong>Communication Management Strategy:</strong> Formal approach to stakeholder communication</li>
                                <li><strong>Business Case Focus:</strong> Stakeholder management supports business case objectives</li>
                                <li><strong>Stage-Based Engagement:</strong> Stakeholder engagement planned at each project stage</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Stakeholder Analysis:</strong> Identify and analyze stakeholders during project initiation</li>
                                <li><strong>Communication Strategy:</strong> Develop communication management strategy aligned with stakeholder needs</li>
                                <li><strong>Role Assignment:</strong> Clearly define and assign stakeholder roles and responsibilities</li>
                                <li><strong>Regular Reporting:</strong> Maintain stakeholder engagement through highlight reports and stage reviews</li>
                                <li><strong>Issue Management:</strong> Address stakeholder concerns through formal issue management process</li>
                            </ol>`,
                    color: "#9b59b6"
                },
                iso: {
                    title: "ISO 21500 - Stakeholder Management",
                    content: `<p><span class="highlight-similar">Stakeholders are persons or organizations that are actively involved in the project, or whose interests may be positively or negatively affected by the execution or completion of the project.</span></p>
                            <p><strong>Detailed Approach:</strong> ISO 21500 provides a standardized process for stakeholder management that integrates with organizational systems. Key features include:</p>
                            <ul>
                                <li><strong>Process Standardization:</strong> Consistent stakeholder management processes across projects</li>
                                <li><strong>Integration Focus:</strong> Stakeholder management integrated with organizational communication systems</li>
                                <li><strong>International Best Practices:</strong> Incorporates globally recognized stakeholder management principles</li>
                                <li><strong>Scalable Approach:</strong> Processes can be adapted to projects of any size or complexity</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <ol>
                                <li><strong>Stakeholder Identification:</strong> Systematically identify stakeholders and their expectations</li>
                                <li><strong>Engagement Planning:</strong> Develop stakeholder engagement plans aligned with project objectives</li>
                                <li><strong>Communication Management:</strong> Implement structured communication processes with stakeholders</li>
                                <li><strong>Expectation Management:</strong> Manage stakeholder expectations through regular communication</li>
                                <li><strong>Performance Monitoring:</strong> Monitor stakeholder satisfaction and adjust engagement approaches</li>
                            </ol>`,
                    color: "#2ecc71"
                }
            }
        };

        this.comprehensiveComparisonData = {
            all: {
                title: "Comprehensive Analysis - All Topics",
                analysis: {
                    summary: "AI analysis reveals key patterns across all project management topics in PMBOK 7, PRINCE2, and ISO 21500.",
                    overallSimilarities: [
                        "All three standards emphasize structured approaches to project management",
                        "Risk management is consistently recognized as critical across methodologies",
                        "Stakeholder engagement is universally acknowledged as essential",
                        "Quality assurance processes are present in all frameworks",
                        "Change control mechanisms are implemented across standards"
                    ],
                    keyDifferences: [
                        "PMBOK 7 focuses on principles and tailoring, while PRINCE2 emphasizes processes and products",
                        "ISO 21500 provides international standardization while others are methodology-specific",
                        "PRINCE2 has more prescribed roles and responsibilities",
                        "PMBOK 7 offers more flexibility in approach adaptation"
                    ],
                    coverageAnalysis: {
                        high: ["Risk Management", "Quality Management", "Stakeholder Management", "Scope Management", "Time Management"],
                        medium: ["Cost Management", "Communication Management", "Integration Management"],
                        low: ["Procurement Management", "Sustainability", "Knowledge Management"]
                    },
                    topics: {
                        risk: {
                            pmbok: { coverage: "High", approach: "Principles-based, integrated across domains" },
                            prince2: { coverage: "High", approach: "Structured, theme-based with formal procedures" },
                            iso: { coverage: "High", approach: "Process-based, aligned with ISO 31000" }
                        },
                        quality: {
                            pmbok: { coverage: "High", approach: "Value-focused, integrated in performance domains" },
                            prince2: { coverage: "High", approach: "Product-focused with quality reviews" },
                            iso: { coverage: "High", approach: "Process-based, aligned with ISO 9001" }
                        },
                        stakeholder: {
                            pmbok: { coverage: "High", approach: "Performance domain with continuous engagement" },
                            prince2: { coverage: "High", approach: "Role-based with communication strategy" },
                            iso: { coverage: "High", approach: "Standardized process approach" }
                        }
                    }
                }
            }
        };
    }

    init() {
        this.setupEventListeners();
        this.initializeComparison();
    }

    setupEventListeners() {
        // Topic selection in comparison
        document.querySelectorAll('.topic-btn').forEach(button => {
            button.addEventListener('click', () => {
                const topic = button.getAttribute('data-topic');
                
                // Update active topic button
                document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update comparison topic select
                document.getElementById('comparisonTopic').value = topic;
                
                // Perform comparison
                this.performComparison(topic);
            });
        });

        // Comparison button
        document.getElementById('compareBtn').addEventListener('click', () => {
            const topic = document.getElementById('comparisonTopic').value;
            this.performComparison(topic);
        });

        // Analyze All button
        document.getElementById('analyzeAllBtn').addEventListener('click', () => {
            const topic = document.getElementById('comparisonTopic').value;
            if (topic === 'all') {
                this.performAIComprehensiveAnalysis();
            } else {
                this.performComparison(topic);
            }
        });

        // Tabs in insights
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                // Update active tab
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding content
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                document.getElementById(`${tabId}Tab`).classList.add('active');
            });
        });
    }

    initializeComparison() {
        // Load default comparison (all topics)
        this.performComparison('all');
    }

    performComparison(topic) {
        const resultsContainer = document.getElementById('comparisonResults');
        const comprehensiveContainer = document.getElementById('comprehensiveComparison');
        const singleContainer = document.getElementById('singleTopicComparison');
        
        // Show loading
        if (resultsContainer) {
            resultsContainer.innerHTML = '<div class="spinner"></div>';
        }
        
        // Simulate API call delay
        setTimeout(() => {
            if (topic === 'all') {
                // Show comprehensive comparison
                if (comprehensiveContainer) comprehensiveContainer.style.display = 'block';
                if (singleContainer) singleContainer.style.display = 'none';
                this.displayComprehensiveComparison();
            } else {
                // Show single topic comparison
                if (comprehensiveContainer) comprehensiveContainer.style.display = 'none';
                if (singleContainer) singleContainer.style.display = 'block';
                
                if (this.comparisonData[topic]) {
                    this.displaySingleTopicComparison(topic, resultsContainer);
                } else {
                    if (resultsContainer) {
                        resultsContainer.innerHTML = '<p>No comparison data available for this topic. Please select another topic.</p>';
                    }
                }
            }
        }, 1000);
    }

    displaySingleTopicComparison(topic, container) {
        const data = this.comparisonData[topic];
        let html = '';
        
        // PMBOK
        html += `
            <div class="standard-view">
                <div class="standard-header" style="background: ${data.pmbok.color};">${data.pmbok.title}</div>
                <div class="standard-content">${data.pmbok.content}</div>
            </div>
        `;
        
        // PRINCE2
        html += `
            <div class="standard-view">
                <div class="standard-header" style="background: ${data.prince2.color};">${data.prince2.title}</div>
                <div class="standard-content">${data.prince2.content}</div>
            </div>
        `;
        
        // ISO
        html += `
            <div class="standard-view">
                <div class="standard-header" style="background: ${data.iso.color};">${data.iso.title}</div>
                <div class="standard-content">${data.iso.content}</div>
            </div>
        `;
        
        if (container) {
            container.innerHTML = html;
        }
    }

    displayComprehensiveComparison() {
        const container = document.getElementById('comprehensiveResults');
        const data = this.comprehensiveComparisonData.all;
        
        if (!container) return;

        let html = `
            <div class="analysis-section">
                <div class="analysis-header">
                    <i class="fas fa-clone"></i>
                    <h4>Overall Similarities</h4>
                </div>
                <ul>
                    ${data.analysis.overallSimilarities.map(item => `<li><span class="highlight-similar">${item}</span></li>`).join('')}
                </ul>
            </div>

            <div class="analysis-section">
                <div class="analysis-header">
                    <i class="fas fa-not-equal"></i>
                    <h4>Key Differences</h4>
                </div>
                <ul>
                    ${data.analysis.keyDifferences.map(item => `<li><span class="highlight-different">${item}</span></li>`).join('')}
                </ul>
            </div>

            <div class="analysis-section">
                <div class="analysis-header">
                    <i class="fas fa-chart-pie"></i>
                    <h4>Topic Coverage Analysis</h4>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 15px;">
                    <div>
                        <h5>High Coverage</h5>
                        ${data.analysis.coverageAnalysis.high.map(topic => `<div class="tag tag-similar">${topic}</div>`).join('')}
                    </div>
                    <div>
                        <h5>Medium Coverage</h5>
                        ${data.analysis.coverageAnalysis.medium.map(topic => `<div class="tag tag-different">${topic}</div>`).join('')}
                    </div>
                    <div>
                        <h5>Low Coverage</h5>
                        ${data.analysis.coverageAnalysis.low.map(topic => `<div class="tag tag-unique">${topic}</div>`).join('')}
                    </div>
                </div>
            </div>

            <div class="analysis-section">
                <div class="analysis-header">
                    <i class="fas fa-table"></i>
                    <h4>Detailed Topic Comparison</h4>
                </div>
                <div style="overflow-x: auto;">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Topic</th>
                                <th>PMBOK 7</th>
                                <th>PRINCE2</th>
                                <th>ISO 21500</th>
                                <th>Coverage Summary</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        // Add rows for each topic
        Object.entries(data.analysis.topics).forEach(([topicKey, topicData]) => {
            const topicName = this.getTopicDisplayName(topicKey);
            html += `
                <tr>
                    <td><strong>${topicName}</strong></td>
                    <td>
                        <div><strong>${topicData.pmbok.coverage}</strong></div>
                        <small>${topicData.pmbok.approach}</small>
                    </td>
                    <td>
                        <div><strong>${topicData.prince2.coverage}</strong></div>
                        <small>${topicData.prince2.approach}</small>
                    </td>
                    <td>
                        <div><strong>${topicData.iso.coverage}</strong></div>
                        <small>${topicData.iso.approach}</small>
                    </td>
                    <td>
                        <span class="tag tag-similar">All Standards</span>
                    </td>
                </tr>
            `;
        });

        html += `
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="analysis-section">
                <div class="analysis-header">
                    <i class="fas fa-lightbulb"></i>
                    <h4>AI Recommendations</h4>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 15px;">
                    <div class="ai-response">
                        <h5>For PMBOK 7</h5>
                        <p>Leverage principles-based approach for flexible, adaptive project environments. Focus on value delivery and stakeholder engagement.</p>
                    </div>
                    <div class="ai-response">
                        <h5>For PRINCE2</h5>
                        <p>Use structured methodology for controlled environments. Ideal for organizations requiring clear roles and formal processes.</p>
                    </div>
                    <div class="ai-response">
                        <h5>For ISO 21500</h5>
                        <p>Implement for international standardization and integration with other management systems. Good for multi-national organizations.</p>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    getTopicDisplayName(topicKey) {
        const topicNames = {
            risk: "Risk Management",
            quality: "Quality Management",
            stakeholder: "Stakeholder Management",
            scope: "Scope Management",
            time: "Time Management",
            cost: "Cost Management",
            change: "Change Control",
            communication: "Communication Management",
            procurement: "Procurement Management",
            integration: "Project Integration"
        };
        return topicNames[topicKey] || topicKey;
    }

    async performAIComprehensiveAnalysis() {
        const container = document.getElementById('comprehensiveResults');
        if (!container) return;
        
        container.innerHTML = `
            <div class="ai-thinking">
                <i class="fas fa-robot"></i>
                <span>AI is conducting comprehensive analysis of all topics across all standards</span>
                <div class="ai-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="spinner"></div>
        `;

        try {
            // This would integrate with the main AI service
            // For now, we'll use the static data
            setTimeout(() => {
                this.displayComprehensiveComparison();
                this.showToast('AI comprehensive analysis completed!');
            }, 2000);
        } catch (error) {
            console.error('Comprehensive analysis error:', error);
            container.innerHTML = `
                <div style="color: var(--danger);">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>Error:</strong> Failed to generate comprehensive analysis. ${error.message}
                </div>
            `;
        }
    }

    showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Insights Dashboard Manager
class InsightsManager {
    constructor() {
        this.analyticsData = {
            usage: [65, 45, 55], // PMBOK, PRINCE2, ISO usage
            satisfaction: [85, 78, 82],
            adoption: [70, 60, 65]
        };
    }

    init() {
        this.initializeAnalyticsChart();
        this.setupInsightsTabs();
    }

    initializeAnalyticsChart() {
        const ctx = document.getElementById('analyticsChart');
        if (!ctx) return;

        new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['PMBOK 7', 'PRINCE2', 'ISO 21500'],
                datasets: [{
                    label: 'Usage Frequency',
                    data: this.analyticsData.usage,
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(46, 204, 113, 0.7)'
                    ],
                    borderColor: [
                        'rgb(52, 152, 219)',
                        'rgb(155, 89, 182)',
                        'rgb(46, 204, 113)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Standards Usage Analytics'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Usage Percentage'
                        }
                    }
                }
            }
        });
    }

    setupInsightsTabs() {
        // Tab functionality is handled by ComparisonEngine
        // This method is for any insights-specific tab setup
    }

    generateRecommendations() {
        // This would integrate with AI for personalized recommendations
        // For now, returns static recommendations
        return [
            "Hybrid Methodology Implementation: Combine PMBOK 7's principles with PRINCE2's structured processes",
            "Tailored Risk Management: Implement multi-layered risk approach across standards",
            "Stakeholder Engagement Strategy: Use integrated approach from all three standards",
            "Quality Management Framework: Adopt comprehensive quality assurance practices",
            "Organizational Adaptation: Create customized framework based on organizational needs"
        ];
    }
}

// Saved Items Manager
class SavedItemsManager {
    constructor() {
        this.savedItems = [];
    }

    init() {
        this.loadSavedItems();
        this.setupEventListeners();
    }

    loadSavedItems() {
        const saved = localStorage.getItem('savedItems');
        if (saved) {
            this.savedItems = JSON.parse(saved);
            this.updateSavedItemsList();
        }
    }

    setupEventListeners() {
        // Refresh data button
        const refreshBtn = document.getElementById('refreshData');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.refreshData());
        }
    }

    updateSavedItemsList() {
        const container = document.getElementById('savedItemsList');
        if (!container) return;
        
        if (this.savedItems.length === 0) {
            container.innerHTML = '<p>No saved items yet. Bookmark content to see it here.</p>';
            return;
        }
        
        let html = '';
        this.savedItems.forEach(item => {
            html += `
                <div class="result-item">
                    <div class="result-header">
                        <span class="result-standard">${item.standard || item.type}</span>
                        <span class="result-section">Saved on ${item.savedAt}</span>
                    </div>
                    <p><strong>${item.title || 'Untitled'}</strong></p>
                    <p>${item.content ? item.content.substring(0, 150) + '...' : ''}</p>
                    <div style="margin-top: 10px;">
                        <button class="btn btn-outline" onclick="savedItemsManager.removeSavedItem(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <button class="btn btn-primary" onclick="savedItemsManager.viewSavedItem(${item.id})" style="margin-left: 10px;">
                            <i class="fas fa-eye"></i> View
                        </button>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    removeSavedItem(id) {
        this.savedItems = this.savedItems.filter(item => item.id !== id);
        localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
        this.updateSavedItemsList();
        this.showToast('Item removed');
    }

    viewSavedItem(id) {
        const item = this.savedItems.find(item => item.id === id);
        if (item) {
            // This would open a detailed view of the saved item
            alert(`Viewing: ${item.title || 'Untitled'}\n\n${item.content || 'No content available'}`);
        }
    }

    refreshData() {
        this.showToast('Refreshing data...');
        
        // Simulate refresh process
        setTimeout(() => {
            this.loadSavedItems();
            this.showToast('Data refreshed successfully!');
        }, 1000);
    }

    showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Public method to add items from other components
    addSavedItem(item) {
        const newItem = {
            ...item,
            id: Date.now(),
            savedAt: new Date().toLocaleString()
        };
        
        this.savedItems.unshift(newItem);
        localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
        this.updateSavedItemsList();
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    window.comparisonEngine = new ComparisonEngine();
    window.insightsManager = new InsightsManager();
    window.savedItemsManager = new SavedItemsManager();
    
    window.comparisonEngine.init();
    window.insightsManager.init();
    window.savedItemsManager.init();
});
