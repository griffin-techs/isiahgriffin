import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: 'CloudScale Enterprise Platform',
    description: 'Microservices-based enterprise platform handling 10M+ daily requests with AI-powered analytics, real-time monitoring, and auto-scaling capabilities.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    tech: ['Kubernetes', 'Go', 'React', 'PostgreSQL', 'Apache Kafka', 'Terraform'],
    github: 'https://github.com/liamribe/cloudscale-platform',
    demo: 'https://cloudscale.liamribe.dev',
    featured: true
  },
  {
    id: 2,
    title: 'FinTech Trading Engine',
    description: 'High-frequency trading platform with microsecond latency, real-time market data processing, and advanced risk management algorithms.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
    tech: ['C++', 'Python', 'Redis', 'WebSocket', 'TimescaleDB', 'Docker'],
    github: 'https://github.com/liamribe/trading-engine',
    demo: 'https://trading.liamribe.dev',
    featured: true
  },
  {
    id: 3,
    title: 'AI-Powered Code Review Bot',
    description: 'Machine learning-based code review automation tool that integrates with GitHub, provides intelligent suggestions, and learns from team preferences.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'GitHub API', 'PostgreSQL'],
    github: 'https://github.com/liamribe/ai-code-reviewer',
    demo: 'https://codereview.liamribe.dev',
    featured: true
  },
  {
    id: 4,
    title: 'Blockchain DeFi Protocol',
    description: 'Decentralized finance protocol with smart contracts for yield farming, staking, and automated market making on Ethereum.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
    tech: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
    github: 'https://github.com/liamribe/defi-protocol',
    demo: 'https://defi.liamribe.dev',
    featured: false
  },
  {
    id: 5,
    title: 'Real-time Collaboration Suite',
    description: 'Google Workspace competitor with real-time document editing, video conferencing, and team collaboration tools built from scratch.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tech: ['React', 'WebRTC', 'Socket.io', 'MongoDB', 'Node.js', 'Operational Transform'],
    github: 'https://github.com/liamribe/collab-suite',
    demo: 'https://collab.liamribe.dev',
    featured: false
  },
  {
    id: 6,
    title: 'IoT Smart City Platform',
    description: 'Comprehensive IoT platform for smart city management with sensor data processing, predictive analytics, and citizen engagement features.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=300&fit=crop',
    tech: ['Next.js', 'TypeScript', 'InfluxDB', 'MQTT', 'TensorFlow', 'AWS IoT'],
    github: 'https://github.com/liamribe/smart-city',
    demo: 'https://smartcity.liamribe.dev',
    featured: false
  },
  {
    id: 7,
    title: 'Quantum Computing Simulator',
    description: 'Web-based quantum computing simulator with visual circuit designer, quantum algorithm implementations, and educational resources.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
    tech: ['Rust', 'WebAssembly', 'React', 'D3.js', 'WebGL'],
    github: 'https://github.com/liamribe/quantum-simulator',
    demo: 'https://quantum.liamribe.dev',
    featured: false
  },
  {
    id: 8,
    title: 'Serverless ML Pipeline',
    description: 'Auto-scaling machine learning pipeline using serverless architecture for model training, deployment, and inference at enterprise scale.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    tech: ['AWS Lambda', 'Python', 'Kubeflow', 'MLflow', 'Terraform', 'Apache Airflow'],
    github: 'https://github.com/liamribe/ml-pipeline',
    demo: 'https://mlpipeline.liamribe.dev',
    featured: false
  }
];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and personal projects demonstrating various technologies and skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project) => (
            <Card key={project.id} className="group overflow-hidden glass-effect border-border/50 hover-glow">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project) => (
            <Card key={project.id} className="group overflow-hidden glass-effect border-border/50 hover-glow">
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
