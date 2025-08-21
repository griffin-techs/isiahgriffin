import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
      achievements: [
        'Built 8+ production applications',
        'Maintained 99.9% uptime across all projects',
        'Reduced development time by 30% through reusable components'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Agency Inc',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive, accessible websites and web applications. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'SCSS', 'WordPress', 'jQuery'],
      achievements: [
        'Delivered 15+ websites ahead of schedule',
        'Achieved 98+ lighthouse scores',
        'Increased client satisfaction by 25%'
      ]
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude with specialization in web technologies.',
      technologies: ['Java', 'Python', 'C++', 'Database Systems'],
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List for 6 semesters',
        'President of Computer Science Society'
      ]
    },
    {
      type: 'education',
      title: 'Full Stack Web Development',
      company: 'FreeCodeCamp',
      location: 'Online',
      period: '2018',
      description: 'Comprehensive certification covering frontend and backend web development, including responsive design and APIs.',
      technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      achievements: [
        'Completed 300+ coding challenges',
        'Built 5 certification projects',
        'Earned Full Stack Developer Certification'
      ]
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const getYear = (period: string) => parseInt(period.split(' - ')[0]);
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 shadow-glow"></div>

                {/* Content Card */}
                <Card className={`glass-effect border-border/50 hover-glow ml-12 md:ml-0 w-full ${
                  index % 2 === 0 ? 'md:w-5/12 md:mr-auto md:pr-8' : 'md:w-5/12 md:ml-auto md:pl-8'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === 'work' ? (
                        <Briefcase className="w-4 h-4 text-primary" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-sm font-medium text-primary">
                        {item.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>
                    
                    <CardTitle className="text-xl font-semibold text-gradient">
                      {item.title}
                    </CardTitle>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <span>{item.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </CardDescription>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-surface-hover border-border text-foreground text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;