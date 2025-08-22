import { Card } from './ui/card';
import { Badge } from './ui/badge';

const techCategories = [
  {
    category: 'Frontend',
    color: 'hsl(var(--primary))',
    technologies: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Next.js', level: 88, icon: '▲' },
      { name: 'Vue.js', level: 85, icon: '💚' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
    ]
  },
  {
    category: 'Backend',
    color: 'hsl(var(--secondary))',
    technologies: [
      { name: 'Node.js', level: 93, icon: '🟢' },
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'GraphQL', level: 87, icon: '📊' },
      { name: 'PostgreSQL', level: 89, icon: '🐘' },
      { name: 'Redis', level: 85, icon: '🔴' },
    ]
  },
  {
    category: 'DevOps & Cloud',
    color: 'hsl(var(--accent))',
    technologies: [
      { name: 'Docker', level: 88, icon: '🐳' },
      { name: 'AWS', level: 92, icon: '☁️' },
      { name: 'Kubernetes', level: 82, icon: '⚙️' },
      { name: 'CI/CD', level: 90, icon: '🔄' },
      { name: 'Terraform', level: 78, icon: '🏗️' },
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Mastering modern technologies to build exceptional software
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 hover-glow glass-effect">
              <div className="flex items-center mb-6">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {tech.level}%
                      </Badge>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          width: `${tech.level}%`,
                          backgroundColor: category.color,
                          boxShadow: `0 0 10px ${category.color}40`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}