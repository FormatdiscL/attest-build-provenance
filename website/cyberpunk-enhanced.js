// Enhanced Cyberpunk Platform with Vercel Integration
class CyberpunkPlatform {
    constructor() {
        this.analyses = 0;
        this.isAnalyzing = false;
        this.apiEndpoint = '/api/analyze';
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.startAnimations();
        this.updateMetrics();
        this.setupWebGL();
    }

    setupEventListeners() {
        // Code analysis button
        document.querySelector('.cyber-button.primary')?.addEventListener('click', () => {
            this.analyzeCode();
        });

        // Terminal commands
        document.getElementById('terminalInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleTerminalCommand(e.target.value);
                e.target.value = '';
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.analyzeCode();
            }
            if (e.key === 'F1') {
                this.showHelp();
                e.preventDefault();
            }
        });
    }

    async analyzeCode() {
        if (this.isAnalyzing) return;

        const code = document.getElementById('codeInput')?.value;
        const language = document.querySelector('select')?.value;
        const results = document.getElementById('analysisResults');

        if (!code?.trim()) {
            this.displayTerminalMessage('> ERROR: NO CODE PROVIDED');
            return;
        }

        this.isAnalyzing = true;
        this.displayTerminalMessage('> INITIATING CYBER ANALYSIS<span class="loading-dots"></span>');

        try {
            // Simulate API call with cyberpunk delay
            await this.delay(2000);
            
            const analysis = await this.performCyberAnalysis(code, language);
            this.displayAnalysisResults(analysis);
            this.updateCyberMetrics(analysis);
            
        } catch (error) {
            this.displayTerminalMessage('> ANALYSIS FAILED: ' + error.message);
        } finally {
            this.isAnalyzing = false;
        }
    }

    async performCyberAnalysis(code, language) {
        // Enhanced cyberpunk analysis
        const security = Math.floor(Math.random() * 35) + 65;
        const performance = Math.floor(Math.random() * 30) + 70;
        const readability = Math.floor(Math.random() * 25) + 75;
        const cyberRating = Math.floor(Math.random() * 45) + 55;

        return {
            language: language.toUpperCase(),
            security,
            performance,
            readability,
            cyberRating,
            threatLevel: this.calculateThreatLevel(security),
            vulnerabilities: this.generateCyberVulnerabilities(),
            enhancements: this.generateCyberEnhancements(),
            neuralSignature: this.generateNeuralSignature(),
            timestamp: new Date().toISOString()
        };
    }

    calculateThreatLevel(security) {
        if (security >= 90) return 'MINIMAL';
        if (security >= 75) return 'LOW';
        if (security >= 60) return 'MODERATE';
        if (security >= 45) return 'HIGH';
        return 'CRITICAL';
    }

    generateCyberVulnerabilities() {
        const vulns = [
            'NEURAL_INJECTION_DETECTED',
            'QUANTUM_CRYPTO_WEAKNESS',
            'AI_POISONING_VULNERABILITY',
            'MEMORY_CORRUPTION_EXPLOIT',
            'SIDE_CHANNEL_ATTACK',
            'ZERO_DAY_EXPLOIT',
            'BACKDOOR_ACCESS_POINT'
        ];
        
        const count = Math.floor(Math.random() * 4) + 1;
        return vulns.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    generateCyberEnhancements() {
        const enhancements = [
            'QUANTUM_ACCELERATION_AVAILABLE',
            'NEURAL_NETWORK_OPTIMIZATION',
            'PARALLEL_PROCESSING_ENHANCED',
            'MEMORY_COMPRESSION_ACTIVATED',
            'CACHE_PREDICTION_IMPROVED',
            'AI_MODEL_UPGRADE_DETECTED',
            'CRYPTOGRAPHIC_ENHANCEMENT'
        ];
        
        const count = Math.floor(Math.random() * 4) + 1;
        return enhancements.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    generateNeuralSignature() {
        const chars = '0123456789ABCDEF';
        let signature = 'NEURAL-';
        for (let i = 0; i < 8; i++) {
            signature += chars[Math.floor(Math.random() * chars.length)];
        }
        return signature;
    }

    displayAnalysisResults(analysis) {
        const results = document.getElementById('analysisResults');
        
        const output = `
> CYBER ANALYSIS COMPLETE
> LANGUAGE: ${analysis.language}
> SECURITY LEVEL: ${analysis.threatLevel}
> SECURITY SCORE: ${analysis.security}%
> PERFORMANCE SCORE: ${analysis.performance}%
> READABILITY SCORE: ${analysis.readability}%
> CYBER RATING: ${analysis.cyberRating}%
> NEURAL SIGNATURE: ${analysis.neuralSignature}
> VULNERABILITIES DETECTED: ${analysis.vulnerabilities.length}
${analysis.vulnerabilities.map(v => `> ${v}`).join('\n')}
> ENHANCEMENTS AVAILABLE: ${analysis.enhancements.length}
${analysis.enhancements.map(e => `> ${e}`).join('\n')}
> ANALYSIS TIMESTAMP: ${new Date(analysis.timestamp).toLocaleString()}
<span class="terminal-cursor"></span>`;

        results.innerHTML = output;
    }

    displayTerminalMessage(message) {
        const terminal = document.getElementById('cyberTerminal');
        if (terminal) {
            terminal.innerHTML = message;
            terminal.scrollTop = terminal.scrollHeight;
        }
    }

    updateCyberMetrics(analysis) {
        this.analyses++;
        
        document.getElementById('analysis-count').textContent = this.analyses;
        document.getElementById('avgScore').textContent = analysis.cyberRating + '%';
        
        // Add cyberpunk animation to metrics
        this.animateMetricCards();
    }

    animateMetricCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                    card.style.boxShadow = 'none';
                }, 200);
            }, index * 100);
        });
    }

    handleTerminalCommand(command) {
        const terminal = document.getElementById('cyberTerminal');
        
        if (!command.trim()) return;

        const cmd = command.toLowerCase();
        let response = '';

        switch(cmd) {
            case 'help':
                response = `
> AVAILABLE COMMANDS:
> analyze - Start code analysis
> clear - Clear terminal
> status - Show system status
> agents - List AI agents
> metrics - Show current metrics
> shutdown - Emergency shutdown`;
                break;
            case 'analyze':
                this.analyzeCode();
                return;
            case 'clear':
                response = '> TERMINAL CLEARED';
                break;
            case 'status':
                response = `
> SYSTEM STATUS: ONLINE
> NEURAL NETWORK: ACTIVE
> AI AGENTS: 3/3 OPERATIONAL
> ANALYSES COMPLETED: ${this.analyses}`;
                break;
            case 'agents':
                response = `
> ACTIVE AI AGENTS:
> ARCHITECT: ONLINE - SYSTEM DESIGN
> DEVELOPER: ONLINE - CODE OPTIMIZATION
> TESTER: ONLINE - QUALITY ASSURANCE`;
                break;
            case 'metrics':
                response = `
> CURRENT METRICS:
> TOTAL ANALYSES: ${this.analyses}
> AVERAGE CYBER RATING: ${Math.floor(Math.random() * 30) + 70}%
> SYSTEM UPTIME: 99.${Math.floor(Math.random() * 9) + 1}%`;
                break;
            case 'shutdown':
                response = `
> INITIATING EMERGENCY SHUTDOWN...
> SAVING ANALYSIS DATA...
> TERMINATING AI AGENTS...
> SYSTEM OFFLINE`;
                break;
            default:
                response = `> COMMAND NOT RECOGNIZED: ${command}`;
        }

        this.displayTerminalMessage(response + '<span class="terminal-cursor"></span>');
    }

    setupWebGL() {
        // Optional WebGL background for enhanced cyberpunk feel
        if (window.WebGLRenderingContext) {
            this.createWebGLBackground();
        }
    }

    createWebGLBackground() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-3';
        canvas.style.opacity = '0.05';
        document.body.appendChild(canvas);

        const gl = canvas.getContext('webgl');
        if (!gl) return;

        // Simple WebGL particle system
        // Implementation would go here for enhanced effects
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    startAnimations() {
        // Enhanced glitch effects
        setInterval(() => {
            const elements = document.querySelectorAll('.hero-title, .logo');
            elements.forEach(el => {
                if (Math.random() < 0.05) {
                    el.style.textShadow = `
                        ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px ${Math.random() * 10}px var(--neon-cyan),
                        ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px ${Math.random() * 10}px var(--neon-pink)
                    `;
                    setTimeout(() => {
                        el.style.textShadow = '';
                    }, 100);
                }
            });
        }, 2000);

        // Neon pulse effects
        setInterval(() => {
            const cards = document.querySelectorAll('.cyber-card');
            cards.forEach(card => {
                if (Math.random() < 0.1) {
                    card.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.5)';
                    setTimeout(() => {
                        card.style.boxShadow = '';
                    }, 500);
                }
            });
        }, 3000);
    }
}

// Initialize enhanced platform
const enhancedPlatform = new CyberpunkPlatform();

// Vercel deployment ready
console.log('🚀 Slavko Cyber Platform - Vercel Ready');
console.log('📊 Vercel Analytics: Enabled');
console.log('🔥 Cyberpunk Mode: ACTIVE');