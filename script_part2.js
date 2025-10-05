// UI Components and Library Management
class LibraryManager {
    constructor() {
        this.currentBook = 'pmbok';
        this.currentChapter = 0;
        this.bookmarks = {};
        this.bookContent = {
            pmbok: {
                title: "PMBOK 7 - A Guide to the Project Management Body of Knowledge",
                chapters: [
                    {
                        title: "Introduction to PMBOK 7",
                        content: `
                            <h3>Introduction to PMBOK 7</h3>
                            <p>The PMBOK Guide – Seventh Edition represents a significant evolution in the Project Management Institute's (PMI) approach to project management. This edition shifts from a process-based standard to a principles-based guide that focuses on delivering value and achieving desired outcomes.</p>
                            
                            <h3>Key Changes in PMBOK 7</h3>
                            <p>The seventh edition introduces several important changes:</p>
                            <ul>
                                <li><strong>Principles over Processes:</strong> Focuses on 12 guiding principles rather than detailed processes</li>
                                <li><strong>Performance Domains:</strong> Introduces 8 performance domains that represent critical areas of focus</li>
                                <li><strong>Tailoring:</strong> Emphasizes the importance of adapting approaches to specific project contexts</li>
                                <li><strong>Models, Methods, and Artifacts:</strong> Provides a curated list of tools and techniques</li>
                            </ul>
                            
                            <h3>The Value Delivery System</h3>
                            <p>PMBOK 7 introduces the concept of a value delivery system that encompasses:</p>
                            <ul>
                                <li>Portfolios, programs, and projects</li>
                                <li>Governance structures</li>
                                <li>Project environment</li>
                                <li>Product management considerations</li>
                            </ul>
                        `
                    },
                    {
                        title: "Project Management Principles",
                        content: `
                            <h3>The 12 Project Management Principles</h3>
                            <p>PMBOK 7 is built around 12 fundamental principles that guide project management behavior and decision-making:</p>
                            
                            <h4>1. Stewardship</h4>
                            <p>Be a diligent, respectful, and caring steward by responsibly managing resources and maintaining trust.</p>
                            
                            <h4>2. Team</h4>
                            <p>Build effective teams by creating collaborative environments and developing team members' capabilities.</p>
                            
                            <h4>3. Stakeholders</h4>
                            <p>Engage stakeholders proactively and effectively to understand their interests and expectations.</p>
                            
                            <h4>4. Value</h4>
                            <p>Focus on delivering value by understanding what is valuable to stakeholders and the organization.</p>
                            
                            <h4>5. Systems Thinking</h4>
                            <p>Recognize, evaluate, and respond to the dynamic circumstances of the project environment.</p>
                            
                            <h4>6. Leadership</h4>
                            <p>Demonstrate and adapt leadership behaviors to support individual and team needs.</p>
                            
                            <h4>7. Tailoring</h4>
                            <p>Design the project development approach based on the context of the project, its objectives, stakeholders, and environment.</p>
                            
                            <h4>8. Quality</h4>
                            <p>Maintain a focus on quality to deliver outcomes that meet stakeholder expectations and requirements.</p>
                            
                            <h4>9. Complexity</h4>
                            <p>Navigate complexity by recognizing and responding to the interactive nature of project elements.</p>
                            
                            <h4>10. Risk</h4>
                            <p>Optimize risk responses by evaluating exposure and opportunities to achieve project benefits.</p>
                            
                            <h4>11. Adaptability and Resiliency</h4>
                            <p>Build adaptability and resiliency to respond to changing conditions and recover from setbacks.</p>
                            
                            <h4>12. Change</h4>
                            <p>Enable change to achieve the envisioned future state in alignment with organizational strategy.</p>
                        `
                    },
                    {
                        title: "Performance Domains",
                        content: `
                            <h3>The 8 Performance Domains</h3>
                            <p>PMBOK 7 introduces eight performance domains that represent critical areas of focus for effective project management:</p>
                            
                            <h4>1. Stakeholder Performance Domain</h4>
                            <p>Focuses on identifying, engaging, and working with stakeholders to achieve project success.</p>
                            
                            <h4>2. Team Performance Domain</h4>
                            <p>Emphasizes building, developing, and leading the project team to deliver value.</p>
                            
                            <h4>3. Development Approach and Life Cycle Performance Domain</h4>
                            <p>Addresses selecting and adapting the appropriate development approach and life cycle.</p>
                            
                            <h4>4. Planning Performance Domain</h4>
                            <p>Concentrates on creating and evolving plans to guide project execution and delivery.</p>
                            
                            <h4>5. Project Work Performance Domain</h4>
                            <p>Focuses on executing work and managing constraints to deliver expected outcomes.</p>
                            
                            <h4>6. Delivery Performance Domain</h4>
                            <p>Emphasizes delivering the scope, quality, and value that stakeholders expect.</p>
                            
                            <h4>7. Measurement Performance Domain</h4>
                            <p>Addresses tracking project performance and making data-driven decisions.</p>
                            
                            <h4>8. Uncertainty Performance Domain</h4>
                            <p>Focuses on identifying, assessing, and responding to uncertainty, risk, and opportunity.</p>
                            
                            <h3>Integration of Performance Domains</h3>
                            <p>These domains are interconnected and should be considered holistically rather than in isolation. They work together to create a comprehensive approach to project management that delivers value and achieves desired outcomes.</p>
                        `
                    }
                ]
            },
            prince2: {
                title: "PRINCE2 - Projects IN Controlled Environments",
                chapters: [
                    {
                        title: "Introduction to PRINCE2",
                        content: `
                            <h3>What is PRINCE2?</h3>
                            <p>PRINCE2 (Projects IN Controlled Environments) is a process-based method for effective project management. It provides a structured approach to project management that is widely recognized and used in both public and private sectors internationally.</p>
                            
                            <h3>Key Features of PRINCE2</h3>
                            <ul>
                                <li><strong>Process-driven:</strong> Provides a defined set of processes to follow</li>
                                <li><strong>Product-focused:</strong> Emphasizes product-based planning</li>
                                <li><strong>Tailorable:</strong> Can be adapted to different project environments</li>
                                <li><strong>Business Case-driven:</strong> Focuses on continued business justification</li>
                                <li><strong>Clearly defined roles:</strong> Establishes clear responsibilities</li>
                            </ul>
                            
                            <h3>The PRINCE2 Framework</h3>
                            <p>The PRINCE2 method is built on seven principles, seven themes, and seven processes:</p>
                            <ul>
                                <li><strong>Principles:</strong> Guiding obligations for good project management practice</li>
                                <li><strong>Themes:</strong> Aspects of project management that must be addressed continually</li>
                                <li><strong>Processes:</strong> Sets of activities directed toward achieving project objectives</li>
                            </ul>
                        `
                    },
                    {
                        title: "PRINCE2 Principles",
                        content: `
                            <h3>The 7 PRINCE2 Principles</h3>
                            <p>PRINCE2 is founded on seven principles that provide the framework for good project management practice:</p>
                            
                            <h4>1. Continued Business Justification</h4>
                            <p>A PRINCE2 project must have continued business justification. The business case is the most important document that provides this justification.</p>
                            
                            <h4>2. Learn from Experience</h4>
                            <p>PRINCE2 project teams should learn from previous projects and apply those lessons throughout the current project.</p>
                            
                            <h4>3. Define Roles and Responsibilities</h4>
                            <p>PRINCE2 projects have defined and agreed roles and responsibilities within an organization structure that engages the business, user, and supplier stakeholder interests.</p>
                            
                            <h4>4. Manage by Stages</h4>
                            <p>PRINCE2 projects are planned, monitored, and controlled on a stage-by-stage basis.</p>
                            
                            <h4>5. Manage by Exception</h4>
                            <p>PRINCE2 projects have defined tolerances for each project objective to establish limits of delegated authority.</p>
                            
                            <h4>6. Focus on Products</h4>
                            <p>PRINCE2 projects focus on the definition and delivery of products, in particular their quality requirements.</p>
                            
                            <h4>7. Tailor to Suit the Project Environment</h4>
                            <p>PRINCE2 is tailored to suit the project's environment, size, complexity, importance, capability, and risk.</p>
                        `
                    }
                ]
            },
            iso: {
                title: "ISO 21500 - Guidance on Project Management",
                chapters: [
                    {
                        title: "Introduction to ISO 21500",
                        content: `
                            <h3>What is ISO 21500?</h3>
                            <p>ISO 21500:2021, Guidance on project management, is an international standard developed by the International Organization for Standardization (ISO). It provides high-level guidance on concepts and processes of project management that are important for, and have impact on, the performance of projects.</p>
                            
                            <h3>Purpose of ISO 21500</h3>
                            <p>The standard aims to:</p>
                            <ul>
                                <li>Provide a common understanding of project management concepts</li>
                                <li>Enable consistent application of project management processes</li>
                                <li>Facilitate effective communication between project stakeholders</li>
                                <li>Support alignment between project management and organizational strategy</li>
                                <li>Enable comparison and benchmarking of project management practices</li>
                            </ul>
                            
                            <h3>Key Concepts</h3>
                            <p>ISO 21500 introduces several fundamental concepts:</p>
                            <ul>
                                <li><strong>Project:</strong> A unique set of processes consisting of coordinated and controlled activities with start and finish dates, undertaken to achieve an objective</li>
                                <li><strong>Project Management:</strong> Application of methods, tools, techniques, and competencies to a project</li>
                                <li><strong>Project Portfolio:</strong> Collection of projects and programs and other work that are grouped together</li>
                                <li><strong>Program:</strong> Set of related projects and other activities that support strategic objectives</li>
                            </ul>
                        `
                    },
                    {
                        title: "ISO 21500 Process Groups",
                        content: `
                            <h3>Process Groups in ISO 21500</h3>
                            <p>ISO 21500 organizes project management processes into five process groups that represent typical project life cycle phases:</p>
                            
                            <h4>1. Initiating Process Group</h4>
                            <p>Processes performed to define a new project or a new phase of an existing project by obtaining authorization to start the project or phase.</p>
                            <ul>
                                <li>Develop project charter</li>
                                <li>Identify stakeholders</li>
                                <li>Define project scope</li>
                            </ul>
                            
                            <h4>2. Planning Process Group</h4>
                            <p>Processes required to establish the scope of the project, refine objectives, and define the course of action required to attain the objectives.</p>
                            <ul>
                                <li>Develop project management plan</li>
                                <li>Plan scope management</li>
                                <li>Plan schedule management</li>
                                <li>Plan cost management</li>
                            </ul>
                            
                            <h4>3. Implementing Process Group</h4>
                            <p>Processes performed to complete the work defined in the project management plan to satisfy project specifications.</p>
                            <ul>
                                <li>Direct and manage project work</li>
                                <li>Manage quality</li>
                                <li>Acquire resources</li>
                                <li>Manage communications</li>
                            </ul>
                            
                            <h4>4. Controlling Process Group</h4>
                            <p>Processes required to track, review, and regulate the progress and performance of the project.</p>
                            <ul>
                                <li>Monitor and control project work</li>
                                <li>Perform integrated change control</li>
                                <li>Validate scope</li>
                                <li>Control costs</li>
                            </ul>
                            
                            <h4>5. Closing Process Group</h4>
                            <p>Processes performed to finalize all activities across all process groups to formally close the project or phase.</p>
                            <ul>
                                <li>Close project or phase</li>
                                <li>Finalize all procurements</li>
                            </ul>
                        `
                    }
                ]
            }
        };
    }

    init() {
        this.loadBookmarks();
        this.setupEventListeners();
        this.initializeLibrary();
    }

    loadBookmarks() {
        const savedBookmarks = localStorage.getItem('bookmarks');
        if (savedBookmarks) {
            this.bookmarks = JSON.parse(savedBookmarks);
        }
    }

    setupEventListeners() {
        // Book selection
        document.querySelectorAll('.book-option').forEach(option => {
            option.addEventListener('click', () => {
                const book = option.getAttribute('data-book');
                this.selectBook(book);
            });
        });

        // Reader controls
        document.getElementById('prevChapter').addEventListener('click', () => this.prevChapter());
        document.getElementById('nextChapter').addEventListener('click', () => this.nextChapter());
        document.getElementById('bookmarkBtn').addEventListener('click', () => this.toggleBookmark());

        // Navigation
        document.querySelectorAll('.nav-links li').forEach(link => {
            link.addEventListener('click', () => {
                const section = link.getAttribute('data-section');
                this.showSection(section);
                
                // Update active nav link
                document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Dashboard card buttons
        document.querySelectorAll('.card .btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    initializeLibrary() {
        // Initialize with PMBOK if no book selected
        if (!this.currentBook) {
            this.selectBook('pmbok');
        }
    }

    selectBook(bookId) {
        this.currentBook = bookId;
        this.currentChapter = 0;

        // Update active book option
        document.querySelectorAll('.book-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-book') === bookId) {
                option.classList.add('active');
            }
        });

        // Load table of contents
        this.loadTableOfContents(bookId);

        // Load first chapter
        this.loadChapter(bookId, 0);

        // Update bookmark button
        this.updateBookmarkButton();
    }

    loadTableOfContents(bookId) {
        const tocList = document.getElementById('tocList');
        const book = this.bookContent[bookId];
        
        if (!book) return;

        let html = '';
        book.chapters.forEach((chapter, index) => {
            html += `
                <div class="toc-item ${index === this.currentChapter ? 'active' : ''}" data-chapter="${index}">
                    ${chapter.title}
                </div>
            `;
        });
        
        tocList.innerHTML = html;

        // Add event listeners to TOC items
        document.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', () => {
                const chapterIndex = parseInt(item.getAttribute('data-chapter'));
                this.loadChapter(bookId, chapterIndex);
                
                // Update active TOC item
                document.querySelectorAll('.toc-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }

    loadChapter(bookId, chapterIndex) {
        const book = this.bookContent[bookId];
        if (!book || !book.chapters[chapterIndex]) return;
        
        const chapter = book.chapters[chapterIndex];
        this.currentChapter = chapterIndex;
        
        const bookContentElement = document.getElementById('bookContent');
        bookContentElement.innerHTML = `
            <div class="chapter-title">${chapter.title}</div>
            <div class="book-text">${chapter.content}</div>
        `;

        // Update TOC active state
        document.querySelectorAll('.toc-item').forEach((item, index) => {
            item.classList.toggle('active', index === chapterIndex);
        });

        // Update navigation buttons state
        this.updateNavigationButtons(bookId, chapterIndex);

        // Update bookmark button
        this.updateBookmarkButton();
    }

    updateNavigationButtons(bookId, chapterIndex) {
        const book = this.bookContent[bookId];
        const prevBtn = document.getElementById('prevChapter');
        const nextBtn = document.getElementById('nextChapter');
        
        if (prevBtn) prevBtn.disabled = chapterIndex === 0;
        if (nextBtn) nextBtn.disabled = chapterIndex === book.chapters.length - 1;
    }

    prevChapter() {
        const book = this.bookContent[this.currentBook];
        if (this.currentChapter > 0) {
            this.loadChapter(this.currentBook, this.currentChapter - 1);
        }
    }

    nextChapter() {
        const book = this.bookContent[this.currentBook];
        if (this.currentChapter < book.chapters.length - 1) {
            this.loadChapter(this.currentBook, this.currentChapter + 1);
        }
    }

    toggleBookmark() {
        const bookmarkKey = `${this.currentBook}-${this.currentChapter}`;
        
        if (this.bookmarks[bookmarkKey]) {
            // Remove bookmark
            delete this.bookmarks[bookmarkKey];
            this.showToast('Bookmark removed');
        } else {
            // Add bookmark
            const book = this.bookContent[this.currentBook];
            const chapter = book.chapters[this.currentChapter];
            
            this.bookmarks[bookmarkKey] = {
                book: this.currentBook,
                chapter: this.currentChapter,
                title: chapter.title,
                bookTitle: book.title,
                timestamp: new Date().toISOString()
            };
            this.showToast('Bookmark added');
        }
        
        // Save bookmarks to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        
        // Update bookmark button
        this.updateBookmarkButton();
    }

    updateBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (!bookmarkBtn) return;

        const bookmarkKey = `${this.currentBook}-${this.currentChapter}`;
        const isBookmarked = !!this.bookmarks[bookmarkKey];
        
        bookmarkBtn.classList.toggle('active', isBookmarked);
        bookmarkBtn.innerHTML = isBookmarked ? 
            '<i class="fas fa-bookmark"></i> Bookmarked' : 
            '<i class="far fa-bookmark"></i> Bookmark This Page';
    }

    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // If showing the library, initialize it
        if (sectionId === 'library') {
            this.selectBook(this.currentBook || 'pmbok');
        }
    }

    showToast(message) {
        // Create toast if it doesn't exist
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

    // Public methods for global access
    selectBookGlobal(bookId) {
        this.showSection('library');
        this.selectBook(bookId);
    }

    showSectionGlobal(sectionId) {
        this.showSection(sectionId);
    }
}

// Dashboard-specific functionality
class DashboardManager {
    constructor() {
        this.recentActivity = [
            {
                icon: 'fa-search',
                color: 'secondary',
                text: 'You searched for "risk management approaches"',
                time: '2 hours ago'
            },
            {
                icon: 'fa-exchange-alt',
                color: 'accent',
                text: 'Compared "Quality Management" across all standards',
                time: '5 hours ago'
            },
            {
                icon: 'fa-cogs',
                color: 'success',
                text: 'Generated a process for software development project',
                time: '1 day ago'
            }
        ];
    }

    init() {
        this.setupDashboardCards();
        this.loadRecentActivity();
    }

    setupDashboardCards() {
        // Card hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--shadow)';
            });
        });
    }

    loadRecentActivity() {
        const activityContainer = document.querySelector('.insight-list');
        if (!activityContainer) return;

        let html = '';
        this.recentActivity.forEach(activity => {
            html += `
                <div class="insight-item">
                    <i class="fas ${activity.icon}" style="color: var(--${activity.color}); margin-right: 10px;"></i>
                    ${activity.text} - ${activity.time}
                </div>
            `;
        });

        activityContainer.innerHTML = html;
    }

    addRecentActivity(activity) {
        this.recentActivity.unshift(activity);
        if (this.recentActivity.length > 5) {
            this.recentActivity.pop();
        }
        this.loadRecentActivity();
    }
}

// Initialize the UI components
document.addEventListener('DOMContentLoaded', () => {
    window.libraryManager = new LibraryManager();
    window.dashboardManager = new DashboardManager();
    
    window.libraryManager.init();
    window.dashboardManager.init();

    // Global functions for HTML onclick handlers
    window.selectBook = (bookId) => window.libraryManager.selectBookGlobal(bookId);
    window.showSection = (sectionId) => window.libraryManager.showSectionGlobal(sectionId);
});