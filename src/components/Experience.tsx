import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
const experiences = [
  {
    type: 'work',
    title: 'Software Developer - Intern',
    company: 'Telenor Maritime',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Developing innovative maritime communication solutions and satellite connectivity platforms. Working on next-generation IoT systems for vessel tracking and fleet management.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Azure', 'IoT'],
    achievements: [
      'Built real-time vessel tracking dashboard',
      'Implemented satellite communication protocols',
      'Developed IoT data processing pipelines',
      'Created maritime fleet management system'
    ],
    image: '/src/assets/profile-picture.jpg',
    companyLogo: 'https://www.telenormaritime.com/wp-content/uploads/2021/03/TM_logo_black.png'
  },
  {
    type: 'work',
    title: 'Principal Software Engineer',
    company: 'CloudScale Technologies',
    location: 'Seattle, WA',
    period: '2023 - 2024',
    description: 'Architecting next-generation cloud infrastructure and leading a team of 12 engineers. Spearheading AI/ML integration initiatives and enterprise-scale system design.',
    technologies: ['Kubernetes', 'Go', 'Python', 'AWS', 'Terraform', 'GraphQL'],
    achievements: [
      'Designed systems handling 10M+ requests/day',
      'Led migration to microservices architecture',
      'Reduced infrastructure costs by 35%',
      'Implemented ML-driven auto-scaling solutions'
    ]
  },
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    period: '2021 - 2023',
    description: 'Led development of mission-critical fintech applications with real-time data processing. Architected scalable backend systems and mentored development teams.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'TypeScript'],
    achievements: [
      'Built real-time trading platform serving 500k+ users',
      'Implemented high-frequency data processing pipelines',
      'Achieved 99.99% uptime SLA',
      'Led team of 8 developers across 3 time zones'
    ]
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'InnovateHub',
    location: 'Austin, TX',
    period: '2019 - 2021',
    description: 'Developed cutting-edge e-commerce platforms and payment processing systems. Focused on performance optimization and scalable architecture design.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API', 'AWS Lambda'],
    achievements: [
      'Built e-commerce platform processing $10M+ annually',
      'Integrated 15+ payment gateways',
      'Reduced page load times by 60%',
      'Implemented advanced fraud detection systems'
    ]
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'CodeCraft Studios',
    location: 'Remote',
    period: '2018 - 2019',
    description: 'Specialized in mobile-first web applications and progressive web apps. Collaborated with international teams to deliver innovative software solutions.',
    technologies: ['React Native', 'Firebase', 'PWA', 'WebRTC', 'Socket.io'],
    achievements: [
      'Launched 5 PWAs with 100k+ downloads',
      'Implemented real-time communication features',
      'Achieved Google Lighthouse scores of 95+',
      'Led internationalization for 12 languages'
    ]
  }
];

const education = [
  {
    type: 'education',
    title: 'Master of Science in Computer Science',
    company: 'Stanford University',
    location: 'Stanford, CA',
    period: '2017 - 2018',
    description: 'Advanced studies in distributed systems, machine learning, and software architecture. Thesis focused on scalable microservices patterns for enterprise applications.',
    technologies: ['Scala', 'Apache Kafka', 'TensorFlow', 'Kubernetes'],
    achievements: [
      'GPA: 3.9/4.0 - Dean\'s List every semester',
      'Research published in ACM Digital Library',
      'TA for Advanced Algorithms course',
      'Winner of Stanford Innovation Challenge'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Software Engineering',
    company: 'MIT',
    location: 'Cambridge, MA',
    period: '2014 - 2018',
    description: 'Comprehensive foundation in computer science with specialization in software engineering. Senior capstone project on blockchain-based smart contracts.',
    technologies: ['C++', 'Java', 'Python', 'Solidity', 'Assembly'],
    achievements: [
      'Summa Cum Laude (GPA: 3.95/4.0)',
      'Valedictorian of Software Engineering Department',
      'Published 3 papers on blockchain technology',
      'President of MIT Blockchain Society'
    ]
  },
  {
    type: 'certification',
    title: 'AWS Solutions Architect Professional',
    company: 'Amazon Web Services',
    location: 'Online',
    period: '2022 - Present',
    description: 'Advanced certification demonstrating expertise in designing and deploying scalable, highly available systems on AWS cloud infrastructure.',
    technologies: ['AWS', 'CloudFormation', 'Lambda', 'ECS', 'RDS'],
    achievements: [
      'Scored 950/1000 on certification exam',
      'Certified trainer for AWS workshops',
      'Led 20+ cloud migration projects'
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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <Card className={`glass-effect border-border/50 ml-12 md:ml-0 w-full ${
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
                        {(item as any).companyLogo && (
                          <img 
                            src={(item as any).companyLogo} 
                            alt={`${item.company} logo`}
                            className="w-6 h-6 object-contain"
                          />
                        )}
                        <span>{item.company}</span>
                        {(item as any).image && (
                          <img 
                            src={(item as any).image} 
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover ml-2 border-2 border-primary/20"
                          />
                        )}
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