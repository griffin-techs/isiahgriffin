import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import CodePlayground from './CodePlayground';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: 'CloudScale Enterprise Platform',
    description: 'Microservices-based enterprise platform handling 10M+ daily requests with AI-powered analytics, real-time monitoring, and auto-scaling capabilities.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    tech: ['Kubernetes', 'Go', 'React', 'PostgreSQL', 'Apache Kafka', 'Terraform'],
    github: 'https://github.com/isiahgriffin/cloudscale-platform',
    demo: 'https://cloudscale.isiahgriffin.dev',
    featured: true,
    codeExamples: [
      {
        title: 'Microservice Health Check',
        description: 'Real-time health monitoring API endpoint with auto-recovery',
        language: 'javascript' as const,
        html: '<div id="health-status">\n  <h3>Service Health Dashboard</h3>\n  <div id="services-list"></div>\n  <button id="refresh-btn">Refresh Status</button>\n</div>',
        css: '#health-status {\n  padding: 20px;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.2);\n}\n\n.service-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  margin: 8px 0;\n  background: rgba(255,255,255,0.1);\n  border-radius: 4px;\n  border-left: 4px solid;\n}\n\n.status-healthy { border-left-color: #00ff88; }\n.status-warning { border-left-color: #ffaa00; }\n.status-critical { border-left-color: #ff4757; }\n\n#refresh-btn {\n  background: rgba(255,255,255,0.2);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  margin-top: 15px;\n}\n\n#refresh-btn:hover {\n  background: rgba(255,255,255,0.3);\n}',
        javascript: 'const services = [\n  { name: "API Gateway", status: "healthy", responseTime: 45 },\n  { name: "User Service", status: "healthy", responseTime: 23 },\n  { name: "Payment Service", status: "warning", responseTime: 156 },\n  { name: "Analytics Engine", status: "healthy", responseTime: 89 }\n];\n\nfunction renderServices() {\n  const container = document.getElementById("services-list");\n  container.innerHTML = services.map(service => `\n    <div class="service-item status-${service.status}">\n      <span><strong>${service.name}</strong></span>\n      <span>${service.responseTime}ms</span>\n    </div>\n  `).join("");\n}\n\nfunction refreshStatus() {\n  // Simulate API call with random status updates\n  services.forEach(service => {\n    service.responseTime = Math.floor(Math.random() * 200) + 20;\n    const statuses = ["healthy", "healthy", "healthy", "warning"];\n    service.status = statuses[Math.floor(Math.random() * statuses.length)];\n  });\n  renderServices();\n}\n\ndocument.getElementById("refresh-btn").addEventListener("click", refreshStatus);\nrenderServices();'
      }
    ]
  },
  {
    id: 2,
    title: 'FinTech Trading Engine',
    description: 'High-frequency trading platform with microsecond latency, real-time market data processing, and advanced risk management algorithms.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
    tech: ['C++', 'Python', 'Redis', 'WebSocket', 'TimescaleDB', 'Docker'],
    github: 'https://github.com/isiahgriffin/trading-engine',
    demo: 'https://trading.isiahgriffin.dev',
    featured: true,
    codeExamples: [
      {
        title: 'Real-time Price Feed',
        description: 'Live cryptocurrency price tracking with WebSocket connection',
        language: 'javascript' as const,
        html: '<div id="trading-dashboard">\n  <h3>Live Crypto Prices</h3>\n  <div id="price-grid"></div>\n  <div id="connection-status">Connecting...</div>\n</div>',
        css: '#trading-dashboard {\n  padding: 20px;\n  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);\n  color: white;\n  border-radius: 8px;\n  font-family: "Monaco", monospace;\n}\n\n#price-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  margin: 20px 0;\n}\n\n.price-card {\n  background: rgba(255,255,255,0.1);\n  padding: 15px;\n  border-radius: 6px;\n  border-left: 4px solid #00ff88;\n  transition: all 0.3s ease;\n}\n\n.price-card.rising {\n  border-left-color: #00ff88;\n  background: rgba(0,255,136,0.1);\n}\n\n.price-card.falling {\n  border-left-color: #ff4757;\n  background: rgba(255,71,87,0.1);\n}\n\n.crypto-symbol {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n.crypto-price {\n  font-size: 24px;\n  font-weight: bold;\n  color: #00ff88;\n}\n\n.price-change {\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n#connection-status {\n  text-align: center;\n  padding: 8px;\n  background: rgba(0,0,0,0.3);\n  border-radius: 4px;\n  font-size: 12px;\n}',
        javascript: 'const cryptoPairs = ["BTC", "ETH", "ADA", "SOL", "MATIC", "AVAX"];\nconst prices = {};\n\nfunction generateRandomPrice(base = 50000) {\n  return (base + (Math.random() - 0.5) * base * 0.1).toFixed(2);\n}\n\nfunction updatePrices() {\n  cryptoPairs.forEach(symbol => {\n    const oldPrice = prices[symbol]?.price || generateRandomPrice();\n    const newPrice = parseFloat(oldPrice) + (Math.random() - 0.5) * 100;\n    const change = ((newPrice - oldPrice) / oldPrice * 100);\n    \n    prices[symbol] = {\n      price: newPrice.toFixed(2),\n      change: change.toFixed(2),\n      rising: change > 0\n    };\n  });\n  renderPrices();\n}\n\nfunction renderPrices() {\n  const grid = document.getElementById("price-grid");\n  grid.innerHTML = cryptoPairs.map(symbol => {\n    const data = prices[symbol];\n    return `\n      <div class="price-card ${data.rising ? "rising" : "falling"}">\n        <div class="crypto-symbol">${symbol}/USD</div>\n        <div class="crypto-price">$${data.price}</div>\n        <div class="price-change">\n          ${data.rising ? "+" : ""}${data.change}%\n        </div>\n      </div>\n    `;\n  }).join("");\n}\n\n// Initialize prices\ncryptoPairs.forEach(symbol => {\n  prices[symbol] = {\n    price: generateRandomPrice(Math.random() * 50000 + 1000),\n    change: "0.00",\n    rising: true\n  };\n});\n\ndocument.getElementById("connection-status").textContent = "Connected - Live Data";\nrenderPrices();\nsetInterval(updatePrices, 2000);'
      }
    ]
  },
  {
    id: 3,
    title: 'AI-Powered Code Review Bot',
    description: 'Machine learning-based code review automation tool that integrates with GitHub, provides intelligent suggestions, and learns from team preferences.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'GitHub API', 'PostgreSQL'],
    github: 'https://github.com/isiahgriffin/ai-code-reviewer',
    demo: 'https://codereview.isiahgriffin.dev',
    featured: true,
    codeExamples: [
      {
        title: 'Code Quality Analyzer',
        description: 'AI-powered code analysis with real-time suggestions',
        language: 'javascript' as const,
        html: '<div id="code-analyzer">\n  <h3>AI Code Review Assistant</h3>\n  <textarea id="code-input" placeholder="Paste your JavaScript code here..."></textarea>\n  <button id="analyze-btn">Analyze Code</button>\n  <div id="analysis-results"></div>\n</div>',
        css: '#code-analyzer {\n  padding: 20px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 8px;\n  max-width: 600px;\n}\n\n#code-input {\n  width: 100%;\n  height: 150px;\n  background: rgba(0,0,0,0.3);\n  border: 1px solid rgba(255,255,255,0.2);\n  border-radius: 4px;\n  color: white;\n  padding: 10px;\n  font-family: "Monaco", monospace;\n  font-size: 14px;\n  margin: 10px 0;\n  resize: vertical;\n}\n\n#code-input::placeholder {\n  color: rgba(255,255,255,0.6);\n}\n\n#analyze-btn {\n  background: rgba(255,255,255,0.2);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n#analyze-btn:hover {\n  background: rgba(255,255,255,0.3);\n}\n\n.suggestion {\n  background: rgba(255,255,255,0.1);\n  padding: 12px;\n  margin: 8px 0;\n  border-radius: 4px;\n  border-left: 4px solid;\n}\n\n.suggestion.error { border-left-color: #ff4757; }\n.suggestion.warning { border-left-color: #ffaa00; }\n.suggestion.info { border-left-color: #00aaff; }\n.suggestion.success { border-left-color: #00ff88; }\n\n.suggestion-type {\n  font-weight: bold;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n}\n\n.suggestion-message {\n  margin-bottom: 5px;\n}\n\n.suggestion-fix {\n  font-family: "Monaco", monospace;\n  background: rgba(0,0,0,0.3);\n  padding: 5px;\n  border-radius: 3px;\n  font-size: 12px;\n}',
        javascript: 'function analyzeCode(code) {\n  const suggestions = [];\n  \n  // Check for common issues\n  if (code.includes("var ")) {\n    suggestions.push({\n      type: "warning",\n      message: "Consider using \\"let\\" or \\"const\\" instead of \\"var\\"",\n      fix: "Replace var with let or const for better scoping"\n    });\n  }\n  \n  if (code.includes("==") && !code.includes("===")) {\n    suggestions.push({\n      type: "error", \n      message: "Use strict equality (===) instead of loose equality (==)",\n      fix: "Replace == with === for type-safe comparisons"\n    });\n  }\n  \n  if (!code.includes("function") && !code.includes("=>") && !code.includes("class")) {\n    suggestions.push({\n      type: "info",\n      message: "Consider organizing code into functions for better maintainability",\n      fix: "Break code into smaller, reusable functions"\n    });\n  }\n  \n  if (code.length > 500) {\n    suggestions.push({\n      type: "warning",\n      message: "Large code block detected - consider splitting into smaller modules",\n      fix: "Extract related functionality into separate modules"\n    });\n  }\n  \n  if (!suggestions.length) {\n    suggestions.push({\n      type: "success",\n      message: "Great! No major issues detected in your code",\n      fix: "Code looks clean and follows good practices"\n    });\n  }\n  \n  return suggestions;\n}\n\nfunction renderSuggestions(suggestions) {\n  const container = document.getElementById("analysis-results");\n  container.innerHTML = suggestions.map(suggestion => `\n    <div class="suggestion ${suggestion.type}">\n      <div class="suggestion-type">${suggestion.type}</div>\n      <div class="suggestion-message">${suggestion.message}</div>\n      <div class="suggestion-fix">${suggestion.fix}</div>\n    </div>\n  `).join("");\n}\n\ndocument.getElementById("analyze-btn").addEventListener("click", () => {\n  const code = document.getElementById("code-input").value;\n  if (!code.trim()) {\n    alert("Please enter some code to analyze!");\n    return;\n  }\n  const suggestions = analyzeCode(code);\n  renderSuggestions(suggestions);\n});\n\n// Pre-fill with example code\ndocument.getElementById("code-input").value = `var name = "John";\nif (age == 18) {\n  console.log("Welcome " + name);\n}`;\n\n// Auto-analyze the example\ndocument.getElementById("analyze-btn").click();'
      }
    ]
  },
  {
    id: 4,
    title: 'Blockchain DeFi Protocol',
    description: 'Decentralized finance protocol with smart contracts for yield farming, staking, and automated market making on Ethereum.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
    tech: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
    github: 'https://github.com/isiahgriffin/defi-protocol',
    demo: 'https://defi.isiahgriffin.dev',
    featured: false
  },
  {
    id: 5,
    title: 'Real-time Collaboration Suite',
    description: 'Google Workspace competitor with real-time document editing, video conferencing, and team collaboration tools built from scratch.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tech: ['React', 'WebRTC', 'Socket.io', 'MongoDB', 'Node.js', 'Operational Transform'],
    github: 'https://github.com/isiahgriffin/collab-suite',
    demo: 'https://collab.isiahgriffin.dev',
    featured: false
  },
  {
    id: 6,
    title: 'IoT Smart City Platform',
    description: 'Comprehensive IoT platform for smart city management with sensor data processing, predictive analytics, and citizen engagement features.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=300&fit=crop',
    tech: ['Next.js', 'TypeScript', 'InfluxDB', 'MQTT', 'TensorFlow', 'AWS IoT'],
    github: 'https://github.com/isiahgriffin/smart-city',
    demo: 'https://smartcity.isiahgriffin.dev',
    featured: false
  },
  {
    id: 7,
    title: 'Quantum Computing Simulator',
    description: 'Web-based quantum computing simulator with visual circuit designer, quantum algorithm implementations, and educational resources.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
    tech: ['Rust', 'WebAssembly', 'React', 'D3.js', 'WebGL'],
    github: 'https://github.com/isiahgriffin/quantum-simulator',
    demo: 'https://quantum.isiahgriffin.dev',
    featured: false
  },
  {
    id: 8,
    title: 'Serverless ML Pipeline',
    description: 'Auto-scaling machine learning pipeline using serverless architecture for model training, deployment, and inference at enterprise scale.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    tech: ['AWS Lambda', 'Python', 'Kubeflow', 'MLflow', 'Terraform', 'Apache Airflow'],
    github: 'https://github.com/isiahgriffin/ml-pipeline',
    demo: 'https://mlpipeline.isiahgriffin.dev',
    featured: false
  }
];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="800">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and personal projects demonstrating various technologies and skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden glass-effect border-border/50 hover-glow"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gradient">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-surface-hover border-border text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="sm" className="hover-glow" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
              <Button 
                size="sm" 
                variant="gradient" 
                className="bg-gradient-primary hover-glow" 
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </Button>
                </div>
                {/* Code Playground */}
                {project.codeExamples && (
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <CodePlayground examples={project.codeExamples} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden glass-effect border-border/50 hover-glow"
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gradient">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-surface-hover border-border text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 hover-glow" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="gradient" 
                    className="flex-1 bg-gradient-primary hover-glow" 
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
