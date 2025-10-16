// Phase 2 Enhanced Functionality
class Phase2Enhancements {
    constructor() {
        this.scenarioTemplates = {
            software: {
                name: "Custom Software Development",
                type: "software-lightweight",
                teamSize: "small",
                duration: "short",
                riskLevel: 2,
                standards: ["PMBOK 7", "ISO 21500"],
                description: "Lightweight process optimized for speed and flexibility"
            },
            innovation: {
                name: "Innovative Product Development", 
                type: "innovation-hybrid",
                teamSize: "medium",
                duration: "medium",
                riskLevel: 4,
                standards: ["PMBOK 7", "PRINCE2", "ISO 21500"],
                description: "Hybrid process balancing innovation and structure"
            },
            government: {
                name: "Large Government Project",
                type: "government-comprehensive", 
                teamSize: "xlarge",
                duration: "xlong",
                riskLevel: 3,
                standards: ["PRINCE2", "ISO 21500"],
                description: "Comprehensive process with strong governance"
            }
        };
        
        this.init();
    }

    init() {
        this.setupScenarioSelectors();
        this.setupProcessDesign();
        this.enhanceProcessGenerator();
        this.setupNavigation();
    }

    setupScenarioSelectors() {
        // Scenario card selection
        document.querySelectorAll('.scenario-select').forEach(button => {
            button.addEventListener('click', (e) => {
                const scenario = e.target.closest('.scenario-card').getAttribute('data-scenario');
                this.loadScenarioTemplate(scenario);
                this.showSection('process');
            });
        });

        // Quick select buttons
        document.querySelectorAll('.scenario-quick-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const scenario = e.target.getAttribute('data-scenario');
                this.loadScenarioTemplate(scenario);
            });
        });
    }

    loadScenarioTemplate(scenario) {
        const template = this.scenarioTemplates[scenario];
        if (!template) return;

        // Set form values
        document.getElementById('projectType').value = template.type;
        document.getElementById('teamSize').value = template.teamSize;
        document.getElementById('projectDuration').value = template.duration;
        document.getElementById('riskLevel').value = template.riskLevel;
        document.getElementById('riskValue').textContent = template.riskLevel;

        // Set standards checkboxes
        document.getElementById('processPmbok').checked = template.standards.includes('PMBOK 7');
        document.getElementById('processPrince2').checked = template.standards.includes('PRINCE2');
        document.getElementById('processIso').checked = template.standards.includes('ISO 21500');

        this.showToast(`Loaded ${template.name} template`);
    }

    setupProcessDesign() {
        const generateBtn = document.getElementById('generateDesignDoc');
        const templateSelect = document.getElementById('processTemplate');
        
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generateDesignDocument();
            });
        }

        if (templateSelect) {
            templateSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    this.previewDesignDocument(e.target.value);
                }
            });
        }
    }

    async generateDesignDocument() {
        const template = document.getElementById('processTemplate').value;
        if (!template) {
            this.showToast('Please select a process template first');
            return;
        }

        const output = document.getElementById('designDocument');
        if (!output) return;
        
        output.innerHTML = this.getLoadingHTML('Generating design document...');

        try {
            const designDoc = await this.createDesignDocument(template);
            output.innerHTML = designDoc;
            
            // Add PDF export button
            const exportBtn = document.createElement('button');
            exportBtn.className = 'btn btn-primary mt-20';
            exportBtn.innerHTML = '<i class="fas fa-download"></i> Export as PDF';
            exportBtn.onclick = () => this.exportDesignDocument();
            output.appendChild(exportBtn);
            
            this.showToast('Design document generated successfully!');
        } catch (error) {
            output.innerHTML = this.getErrorHTML(error);
        }
    }

    previewDesignDocument(scenario) {
        const output = document.getElementById('designDocument');
        if (!output) return;
        
        const template = this.scenarioTemplates[scenario];
        
        output.innerHTML = `
            <div class="design-document-content">
                <div class="design-section">
                    <h2>${template.name} - Preview</h2>
                    <p><strong>Scenario:</strong> ${template.description}</p>
                    <p><strong>Standards:</strong> ${template.standards.join(', ')}</p>
                </div>
                <div class="design-section">
                    <h3>Process Overview</h3>
                    <p>This template includes:</p>
                    <ul>
                        <li>Tailored phases and activities</li>
                        <li>Standards references and justifications</li>
                        <li>Key deliverables and decision gates</li>
                        <li>Comprehensive documentation</li>
                    </ul>
                </div>
                <div class="design-section">
                    <p class="text-center" style="color: var(--text-light);">
                        Click "Generate Design Document" to create the complete process design document.
                    </p>
                </div>
            </div>
        `;
    }

    async createDesignDocument(scenario) {
        const template = this.scenarioTemplates[scenario];
        const processData = await this.generateProcessData(template);
        
        return `
            <div class="design-document-content">
                <div class="design-section">
                    <h1>${template.name} - Process Design Document</h1>
                    <p><strong>Scenario:</strong> ${template.description}</p>
                    <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><strong>Applicable Standards:</strong> ${template.standards.join(', ')}</p>
                </div>

                <div class="design-section">
                    <h2>Executive Summary</h2>
                    <p>This process design document outlines a tailored project management approach for ${template.name.toLowerCase()} scenarios, incorporating best practices from ${template.standards.join(', ')}. The process has been specifically designed to address the unique challenges and requirements of this project context.</p>
                </div>

                <div class="design-section">
                    <h2>Process Overview</h2>
                    ${this.generateProcessVisualization(processData)}
                    <p>The process follows a structured yet flexible approach with clear phase transitions and decision points. Each phase includes specific activities, deliverables, and quality gates to ensure project success.</p>
                </div>

                <div class="design-section">
                    <h2>Detailed Process Phases</h2>
                    ${this.generatePhaseDetails(processData)}
                </div>

                <div class="design-section">
                    <h2>Key Deliverables</h2>
                    ${this.generateDeliverablesList(processData)}
                </div>

                <div class="design-section">
                    <h2>Roles and Responsibilities</h2>
                    ${this.generateRolesTemplate(scenario)}
                </div>

                <div class="design-section">
                    <h2>Standards References & Justification</h2>
                    ${this.generateStandardsJustification(template)}
                </div>

                <div class="design-section">
                    <h2>Tailoring Rationale</h2>
                    ${this.generateTailoringRationale(template)}
                </div>

                <div class="design-section">
                    <h2>Quality Assurance</h2>
                    ${this.generateQualityAssurance(scenario)}
                </div>

                <div class="design-section">
                    <h2>Risk Management Approach</h2>
                    ${this.generateRiskManagement(scenario)}
                </div>
            </div>
        `;
    }

    generateProcessVisualization(processData) {
        return `
            <div class="process-flow">
                ${processData.phases.map((phase, index) => `
                    <div class="phase-node">
                        <h4>${phase.name}</h4>
                        <p>${phase.duration}</p>
                    </div>
                    ${index < processData.phases.length - 1 ? '<div class="phase-connector"><i class="fas fa-arrow-right"></i></div>' : ''}
                `).join('')}
            </div>
        `;
    }

    generatePhaseDetails(processData) {
        return processData.phases.map(phase => `
            <div class="process-phase">
                <div class="phase-header">
                    <div class="phase-title">${phase.name}</div>
                    <div class="phase-duration">${phase.duration}</div>
                </div>
                <p><strong>Objective:</strong> ${phase.objective}</p>
                <div class="activities-grid">
                    ${phase.activities.map(activity => `
                        <div class="activity-card">
                            <strong>${activity.name}</strong>
                            <p>${activity.description}</p>
                            ${activity.standard ? `<small><em>Reference: ${activity.standard}</em></small>` : ''}
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 15px;">
                    <strong>Key Decisions:</strong> ${phase.decisions}
                </div>
            </div>
        `).join('');
    }

    generateDeliverablesList(processData) {
        return `
            <ul class="deliverables-list">
                ${processData.deliverables.map(deliverable => `
                    <li>
                        <strong>${deliverable.name}</strong> - ${deliverable.description}
                        ${deliverable.standard ? `<span class="reference-standard">[${deliverable.standard}]</span>` : ''}
                        ${deliverable.phase ? `<small style="color: var(--text-light);">(${deliverable.phase})</small>` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
    }

    generateRolesTemplate(scenario) {
        const roles = {
            software: [
                { role: "Product Owner", responsibility: "Defines requirements and priorities", standard: "PMBOK 7" },
                { role: "Scrum Master", responsibility: "Facilitates agile process", standard: "PMBOK 7" },
                { role: "Development Team", responsibility: "Delivers working software", standard: "ISO 21500" }
            ],
            innovation: [
                { role: "Innovation Lead", responsibility: "Drives creative direction", standard: "PMBOK 7" },
                { role: "Research Coordinator", responsibility: "Manages R&D activities", standard: "PRINCE2" },
                { role: "Stakeholder Manager", responsibility: "Engages key stakeholders", standard: "ISO 21500" }
            ],
            government: [
                { role: "Project Director", responsibility: "Overall accountability", standard: "PRINCE2" },
                { role: "Compliance Officer", responsibility: "Ensures regulatory adherence", standard: "ISO 21500" },
                { role: "Procurement Manager", responsibility: "Manages vendor relationships", standard: "PRINCE2" }
            ]
        };

        const scenarioRoles = roles[scenario] || roles.software;
        
        return `
            <div style="overflow-x: auto;">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Key Responsibilities</th>
                            <th>Primary Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${scenarioRoles.map(role => `
                            <tr>
                                <td><strong>${role.role}</strong></td>
                                <td>${role.responsibility}</td>
                                <td>${role.standard}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    generateStandardsJustification(template) {
        const justifications = {
            'PMBOK 7': {
                rationale: 'Principles-based approach for flexibility and adaptability',
                contributions: 'Principles, performance domains, tailoring guidance, value delivery focus',
                specificUse: 'Provides foundational principles and adaptable framework'
            },
            'PRINCE2': {
                rationale: 'Structured methodology for governance and control',
                contributions: 'Processes, themes, management products, stage controls, business case focus',
                specificUse: 'Ensures structured governance and clear accountability'
            },
            'ISO 21500': {
                rationale: 'International standardization and best practices',
                contributions: 'Process groups, subject groups, international compatibility, integration framework',
                specificUse: 'Provides international benchmarking and standardization'
            }
        };

        return template.standards.map(standard => {
            const justification = justifications[standard];
            return `
                <div class="justification-item">
                    <h4>${standard}</h4>
                    <p><strong>Rationale for Inclusion:</strong> ${justification.rationale}</p>
                    <p><strong>Key Contributions:</strong> ${justification.contributions}</p>
                    <p><strong>Specific Application:</strong> ${justification.specificUse}</p>
                </div>
            `;
        }).join('');
    }

    generateTailoringRationale(template) {
        const rationales = {
            software: 'Emphasized iterative development and customer collaboration over comprehensive documentation. Reduced governance overhead for speed while maintaining essential quality controls. Selected PMBOK 7 for flexibility and ISO 21500 for international best practices.',
            innovation: 'Balanced structure with flexibility to accommodate uncertainty. Incorporated iterative feedback loops while maintaining stage governance for decision points. Combined all three standards for comprehensive coverage.',
            government: 'Emphasized comprehensive documentation, formal approvals, and compliance requirements. Extended governance framework with strong emphasis on audit trails and regulatory compliance. Selected PRINCE2 for structure and ISO 21500 for international standards.'
        };

        const omissions = {
            software: 'Limited PRINCE2 elements to avoid excessive documentation. Focused on essential processes only.',
            innovation: 'No significant omissions - hybrid approach incorporates relevant elements from all standards.',
            government: 'Limited PMBOK 7 principles where they conflict with rigid governance requirements.'
        };

        return `
            <div class="justification-item">
                <p><strong>Tailoring Approach:</strong> ${rationales[template]}</p>
                <p><strong>Standards Selected:</strong> ${template.standards.join(', ')}</p>
                <p><strong>Omissions Rationale:</strong> ${omissions[template]}</p>
                <p><strong>Adaptation Level:</strong> Highly tailored to specific scenario requirements while maintaining standards compliance.</p>
            </div>
        `;
    }

    generateQualityAssurance(scenario) {
        const approaches = {
            software: 'Continuous integration and testing, automated quality gates, peer reviews, and iterative validation with stakeholders.',
            innovation: 'Stage-gate reviews, prototype validation, user testing cycles, and quality checkpoints at each innovation phase.',
            government: 'Formal quality audits, compliance verification, documentation reviews, and regulatory approval gates at each stage.'
        };

        return `
            <div class="justification-item">
                <p><strong>Quality Approach:</strong> ${approaches[scenario]}</p>
                <p><strong>Key Quality Metrics:</strong> Defect rates, stakeholder satisfaction, compliance adherence, deliverable acceptance</p>
                <p><strong>Quality Gates:</strong> Phase-end reviews, deliverable approvals, compliance checks, stakeholder sign-offs</p>
            </div>
        `;
    }

    generateRiskManagement(scenario) {
        const approaches = {
            software: 'Agile risk management with iterative identification and mitigation. Focus on technical risks and requirement changes.',
            innovation: 'Balanced risk-taking with controlled experimentation. Emphasis on market and technical uncertainty management.',
            government: 'Comprehensive risk register with formal assessment and mitigation strategies. Strong focus on compliance and political risks.'
        };

        return `
            <div class="justification-item">
                <p><strong>Risk Management Approach:</strong> ${approaches[scenario]}</p>
                <p><strong>Key Risk Categories:</strong> Technical, Schedule, Resource, Compliance, Stakeholder</p>
                <p><strong>Risk Review Frequency:</strong> ${scenario === 'software' ? 'Sprint-based' : scenario === 'innovation' ? 'Phase-based' : 'Monthly formal reviews'}</p>
            </div>
        `;
    }

    async generateProcessData(template) {
        // Simulate AI-generated process data based on scenario
        const processTemplates = {
            software: {
                phases: [
                    {
                        name: "Project Initiation",
                        duration: "2-3 weeks",
                        objective: "Define project scope, objectives, and secure stakeholder alignment",
                        activities: [
                            { name: "Stakeholder Analysis", description: "Identify and analyze key stakeholders", standard: "PMBOK 7" },
                            { name: "Scope Definition", description: "Define project boundaries and deliverables", standard: "ISO 21500" },
                            { name: "Feasibility Assessment", description: "Evaluate technical and business viability", standard: "PMBOK 7" }
                        ],
                        decisions: "Project approval and resource commitment"
                    },
                    {
                        name: "Sprint Planning & Execution",
                        duration: "2-4 weeks per sprint",
                        objective: "Deliver working software increments through iterative development",
                        activities: [
                            { name: "Sprint Planning", description: "Plan work for upcoming iteration", standard: "PMBOK 7" },
                            { name: "Daily Stand-ups", description: "Coordinate team progress", standard: "PMBOK 7" },
                            { name: "Code Development", description: "Implement features and functionality", standard: "ISO 21500" }
                        ],
                        decisions: "Sprint scope adjustments and priority changes"
                    },
                    {
                        name: "Review & Adaptation",
                        duration: "1 week per sprint",
                        objective: "Validate deliverables and adapt process based on feedback",
                        activities: [
                            { name: "Sprint Review", description: "Demonstrate completed work", standard: "PMBOK 7" },
                            { name: "Retrospective", description: "Improve team processes", standard: "PMBOK 7" },
                            { name: "Backlog Refinement", description: "Update and prioritize work items", standard: "ISO 21500" }
                        ],
                        decisions: "Process improvements and backlog adjustments"
                    },
                    {
                        name: "Project Closure",
                        duration: "1-2 weeks",
                        objective: "Formalize project completion and capture lessons learned",
                        activities: [
                            { name: "Final Delivery", description: "Formal handover of project outputs", standard: "ISO 21500" },
                            { name: "Documentation", description: "Complete project documentation", standard: "PRINCE2" },
                            { name: "Lessons Learned", description: "Capture and document project insights", standard: "PMBOK 7" }
                        ],
                        decisions: "Project acceptance and team release"
                    }
                ],
                deliverables: [
                    { name: "Project Charter", description: "Formal authorization document", standard: "PMBOK 7", phase: "Initiation" },
                    { name: "Product Backlog", description: "Prioritized requirements list", standard: "PMBOK 7", phase: "Initiation" },
                    { name: "Sprint Deliverables", description: "Working software increments", standard: "ISO 21500", phase: "Execution" },
                    { name: "Test Reports", description: "Quality verification documentation", standard: "ISO 21500", phase: "Review" },
                    { name: "Final Project Report", description: "Project completion documentation", standard: "All Standards", phase: "Closure" }
                ]
            },
            innovation: {
                phases: [
                    {
                        name: "Discovery & Ideation",
                        duration: "4-6 weeks",
                        objective: "Explore opportunities and generate innovative concepts",
                        activities: [
                            { name: "Market Research", description: "Analyze market needs and trends", standard: "PMBOK 7" },
                            { name: "Ideation Workshops", description: "Generate creative solutions", standard: "PMBOK 7" },
                            { name: "Feasibility Analysis", description: "Assess technical and market viability", standard: "PRINCE2" }
                        ],
                        decisions: "Concept selection and initial funding"
                    },
                    {
                        name: "Prototype Development",
                        duration: "8-12 weeks",
                        objective: "Build and test prototypes to validate concepts",
                        activities: [
                            { name: "Prototype Design", description: "Create detailed prototype specifications", standard: "PRINCE2" },
                            { name: "Iterative Development", description: "Build and refine prototypes", standard: "PMBOK 7" },
                            { name: "User Testing", description: "Validate with target users", standard: "ISO 21500" }
                        ],
                        decisions: "Prototype iteration and feature prioritization"
                    },
                    {
                        name: "Solution Refinement",
                        duration: "12-16 weeks",
                        objective: "Refine solution based on feedback and prepare for launch",
                        activities: [
                            { name: "Feedback Integration", description: "Incorporate user and stakeholder feedback", standard: "PMBOK 7" },
                            { name: "Solution Optimization", description: "Enhance and optimize the solution", standard: "ISO 21500" },
                            { name: "Launch Preparation", description: "Prepare for market introduction", standard: "PRINCE2" }
                        ],
                        decisions: "Launch readiness and scale planning"
                    }
                ],
                deliverables: [
                    { name: "Innovation Brief", description: "Concept definition and scope", standard: "PMBOK 7", phase: "Discovery" },
                    { name: "Prototype Models", description: "Working prototypes for validation", standard: "PRINCE2", phase: "Prototype" },
                    { name: "User Feedback Report", description: "Validation findings and insights", standard: "ISO 21500", phase: "Prototype" },
                    { name: "Refined Solution", description: "Optimized final product", standard: "All Standards", phase: "Refinement" },
                    { name: "Launch Plan", description: "Market introduction strategy", standard: "PRINCE2", phase: "Refinement" }
                ]
            },
            government: {
                phases: [
                    {
                        name: "Project Initiation & Planning",
                        duration: "8-12 weeks",
                        objective: "Establish project foundation and comprehensive planning",
                        activities: [
                            { name: "Stakeholder Engagement", description: "Identify and engage all stakeholders", standard: "PRINCE2" },
                            { name: "Regulatory Compliance", description: "Ensure all regulatory requirements", standard: "ISO 21500" },
                            { name: "Detailed Planning", description: "Comprehensive project planning", standard: "PRINCE2" }
                        ],
                        decisions: "Project authorization and budget approval"
                    },
                    {
                        name: "Design & Development",
                        duration: "24-36 weeks",
                        objective: "Detailed design and development with rigorous oversight",
                        activities: [
                            { name: "Detailed Design", description: "Create comprehensive design documents", standard: "PRINCE2" },
                            { name: "Quality Assurance", description: "Implement quality control processes", standard: "ISO 21500" },
                            { name: "Progress Reporting", description: "Regular status and compliance reporting", standard: "PRINCE2" }
                        ],
                        decisions: "Design approvals and milestone assessments"
                    },
                    {
                        name: "Implementation & Testing",
                        duration: "16-24 weeks",
                        objective: "Implement solution with comprehensive testing",
                        activities: [
                            { name: "System Implementation", description: "Deploy and integrate solution", standard: "ISO 21500" },
                            { name: "Comprehensive Testing", description: "Rigorous testing and validation", standard: "PRINCE2" },
                            { name: "User Training", description: "Train end-users and operators", standard: "ISO 21500" }
                        ],
                        decisions: "Implementation readiness and acceptance criteria"
                    },
                    {
                        name: "Operations & Closure",
                        duration: "8-12 weeks",
                        objective: "Transition to operations and formal project closure",
                        activities: [
                            { name: "Operational Handover", description: "Transfer to operations team", standard: "PRINCE2" },
                            { name: "Final Documentation", description: "Complete all project documentation", standard: "ISO 21500" },
                            { name: "Post-Implementation Review", description: "Assess project outcomes and lessons", standard: "PRINCE2" }
                        ],
                        decisions: "Project acceptance and operational transition"
                    }
                ],
                deliverables: [
                    { name: "Project Charter", description: "Formal project authorization", standard: "PRINCE2", phase: "Initiation" },
                    { name: "Compliance Documentation", description: "Regulatory compliance evidence", standard: "ISO 21500", phase: "Initiation" },
                    { name: "Design Specifications", description: "Detailed design documents", standard: "PRINCE2", phase: "Design" },
                    { name: "Test Reports", description: "Comprehensive testing documentation", standard: "ISO 21500", phase: "Testing" },
                    { name: "Operational Manuals", description: "System operation documentation", standard: "PRINCE2", phase: "Closure" }
                ]
            }
        };

        return processTemplates[template] || processTemplates.software;
    }

    enhanceProcessGenerator() {
        // Only enhance if the main app is available
        if (window.app && typeof window.app.generateProcess === 'function') {
            const originalGenerate = window.app.generateProcess.bind(window.app);
            
            window.app.generateProcess = async function() {
                const output = document.getElementById('processOutput');
                if (output) {
                    output.innerHTML = this.getLoadingHTML('AI is generating your custom process framework');
                }

                try {
                    // Call the original function
                    await originalGenerate();
                    
                    // Add Phase 2 enhancements after a short delay to ensure the content is rendered
                    setTimeout(() => {
                        this.addEnhancedProcessFeatures();
                    }, 500);
                    
                } catch (error) {
                    console.error('Process generation error:', error);
                    if (output) {
                        output.innerHTML = this.getErrorHTML(error);
                    }
                }
            }.bind(window.app);
        }
    }

    addEnhancedProcessFeatures() {
        this.addProcessVisualization();
        this.addStandardsReferences();
    }

    addProcessVisualization() {
        const processOutput = document.getElementById('processOutput');
        if (!processOutput) return;
        
        // Create or update visualization
        let visualization = document.getElementById('processVisualization');
        if (!visualization) {
            visualization = document.createElement('div');
            visualization.id = 'processVisualization';
            visualization.className = 'process-visualization';
            // Insert at the beginning of process output
            processOutput.insertBefore(visualization, processOutput.firstChild);
        }
        
        visualization.innerHTML = `
            <h4>Process Flow Visualization</h4>
            <div class="process-flow">
                <div class="phase-node">
                    <h4>Initiation</h4>
                    <p>Define project scope and objectives</p>
                </div>
                <div class="phase-connector"><i class="fas fa-arrow-right"></i></div>
                <div class="phase-node">
                    <h4>Planning</h4>
                    <p>Create detailed roadmap</p>
                </div>
                <div class="phase-connector"><i class="fas fa-arrow-right"></i></div>
                <div class="phase-node">
                    <h4>Execution</h4>
                    <p>Implement and deliver work</p>
                </div>
                <div class="phase-connector"><i class="fas fa-arrow-right"></i></div>
                <div class="phase-node">
                    <h4>Monitoring</h4>
                    <p>Track progress and quality</p>
                </div>
                <div class="phase-connector"><i class="fas fa-arrow-right"></i></div>
                <div class="phase-node">
                    <h4>Closure</h4>
                    <p>Finalize and handover</p>
                </div>
            </div>
        `;
    }

    addStandardsReferences() {
        const processOutput = document.getElementById('processOutput');
        if (!processOutput) return;
        
        // Create or update references
        let references = document.getElementById('standardsReferences');
        if (!references) {
            references = document.createElement('div');
            references.id = 'standardsReferences';
            references.className = 'standards-references';
            processOutput.appendChild(references);
        }
        
        const selectedStandards = this.getSelectedStandards();
        
        references.innerHTML = `
            <h4>Standards References</h4>
            ${selectedStandards.includes('PMBOK 7') ? `
                <div class="reference-item">
                    <div>
                        <span class="reference-standard">PMBOK 7</span>
                        <div>Principles-based project management approach</div>
                    </div>
                    <span class="reference-section">Performance Domains</span>
                </div>
            ` : ''}
            ${selectedStandards.includes('PRINCE2') ? `
                <div class="reference-item">
                    <div>
                        <span class="reference-standard">PRINCE2</span>
                        <div>Process-driven project methodology</div>
                    </div>
                    <span class="reference-section">Themes & Processes</span>
                </div>
            ` : ''}
            ${selectedStandards.includes('ISO 21500') ? `
                <div class="reference-item">
                    <div>
                        <span class="reference-standard">ISO 21500</span>
                        <div>International project management guidance</div>
                    </div>
                    <span class="reference-section">Process Groups</span>
                </div>
            ` : ''}
            ${selectedStandards.length === 0 ? `
                <p>No standards selected. Please select at least one standard to see references.</p>
            ` : ''}
        `;
    }

    getSelectedStandards() {
        const standards = [];
        if (document.getElementById('processPmbok')?.checked) standards.push("PMBOK 7");
        if (document.getElementById('processPrince2')?.checked) standards.push("PRINCE2");
        if (document.getElementById('processIso')?.checked) standards.push("ISO 21500");
        return standards;
    }

    setupNavigation() {
        // Setup navigation for new Phase 2 sections
        document.querySelectorAll('.nav-links li').forEach(link => {
            link.addEventListener('click', () => {
                const section = link.getAttribute('data-section');
                this.showSection(section);
                
                // Update active nav link
                document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    exportDesignDocument() {
        if (window.jspdf && window.jspdf.jsPDF) {
            const doc = new window.jspdf.jsPDF('p', 'mm', 'a4');
            const element = document.querySelector('.design-document-content');
            
            if (!element) {
                this.showToast('No design document content found');
                return;
            }

            // Show loading
            this.showToast('Generating PDF... This may take a moment.');
            
            // Add basic styling for PDF
            const options = {
                margin: [15, 15, 15, 15],
                filename: 'Process_Design_Document.pdf',
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#ffffff'
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                }
            };

            // Use html2canvas for better rendering
            html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                width: element.scrollWidth,
                height: element.scrollHeight
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 190; // A4 width in mm
                const pageHeight = 280; // A4 height in mm
                const imgHeight = canvas.height * imgWidth / canvas.width;
                
                let heightLeft = imgHeight;
                let position = 10;
                
                doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight + 10;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                
                const template = document.getElementById('processTemplate').value;
                const templateName = template ? template.charAt(0).toUpperCase() + template.slice(1) : 'Process';
                doc.save(`${templateName}_Design_Document.pdf`);
                
                this.showToast('PDF exported successfully!');
            }).catch(error => {
                console.error('PDF export error:', error);
                this.showToast('PDF export failed. Please try again.');
            });
            
        } else {
            this.showToast('PDF export requires jsPDF and html2canvas libraries');
        }
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    }

    getLoadingHTML(message) {
        return `
            <div class="ai-thinking">
                <i class="fas fa-robot"></i>
                <span>${message}</span>
                <div class="ai-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
    }

    getErrorHTML(error) {
        return `
            <div style="color: var(--danger); padding: 20px; text-align: center;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <h4>Error Generating Document</h4>
                <p>${error.message || 'An unexpected error occurred'}</p>
                <button class="btn btn-outline" onclick="location.reload()">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;
    }
}

// Global functions for HTML onclick handlers
function selectBook(bookId) {
    if (window.libraryManager) {
        window.libraryManager.selectBook(bookId);
    }
}

function showSection(sectionId) {
    if (window.phase2) {
        window.phase2.showSection(sectionId);
    }
}

// Initialize Phase 2 enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.phase2 = new Phase2Enhancements();
    console.log('Phase 2 enhancements loaded successfully!');
});