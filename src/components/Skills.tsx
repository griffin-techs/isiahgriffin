import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Palette, 
  GitBranch,
  Cloud,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "TailwindCSS", level: 95 },
        { name: "JavaScript ES6+", level: 93 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js/Express", level: 88 },
        { name: "FastAPI/Python", level: 85 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Prisma ORM", level: 82 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 83 },
        { name: "AWS/GCP", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 78 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "Docker", "Vercel", 
    "Netlify", "GitHub Actions", "Jira", "Slack", "Linear"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="glass-effect border-border/50 hover-glow"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gradient">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{ 
                        animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` 
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools & Technologies */}
        <Card className="glass-effect border-border/50 hover-glow">
          <CardHeader>
            <CardTitle className="text-center text-gradient flex items-center justify-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Palette className="w-6 h-6" />
              </div>
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="px-4 py-2 bg-surface-hover rounded-full text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;