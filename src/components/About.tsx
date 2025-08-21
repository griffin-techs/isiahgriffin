import { Card } from '@/components/ui/card';
import profilePicture from '@/assets/profile-picture.jpg';

const About = () => {
  const skills = [
    'React & Next.js',
    'Node.js & Express',
    'FastAPI & Python',
    'PostgreSQL & MongoDB',
    'TailwindCSS & SCSS',
    'Docker & AWS',
    'TypeScript',
    'Git & GitHub'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30"></div>
              <img 
                src={profilePicture}
                alt="Alex Johnson - Full Stack Developer"
                className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-card border-2 border-border hover-glow transition-all duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <Card className="p-6 glass-effect border-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that matter. My journey began with curiosity 
                  about how websites work, and it evolved into a love for crafting 
                  exceptional user experiences.
                </p>
                <p>
                  I specialize in modern web technologies like React, Node.js, and Python, 
                  always staying updated with the latest industry trends and best practices. 
                  I believe in writing clean, maintainable code and building applications 
                  that scale.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </Card>

            {/* Quick Skills */}
            <Card className="p-6 glass-effect border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;