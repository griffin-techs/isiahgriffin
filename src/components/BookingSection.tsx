import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MessageCircle, Video } from 'lucide-react';

const BookingSection = () => {
  const meetingTypes = [
    {
      title: '30-Minute Discovery Call',
      duration: '30 minutes',
      description: 'Quick consultation to discuss your project needs and how I can help bring your ideas to life.',
      icon: MessageCircle,
      calendlyUrl: 'https://calendly.com/your-username/30min-discovery', // Replace with your actual Calendly link
      features: [
        'Project requirement discussion',
        'Technology recommendations',
        'Timeline and budget estimation',
        'Next steps planning'
      ]
    },
    {
      title: '1-Hour Deep Dive',
      duration: '1 hour',
      description: 'In-depth technical consultation for complex projects, architecture planning, and detailed solution design.',
      icon: Video,
      calendlyUrl: 'https://calendly.com/your-username/1hour-deepdive', // Replace with your actual Calendly link
      features: [
        'Detailed technical analysis',
        'System architecture design',
        'Performance optimization strategies',
        'Implementation roadmap',
        'Code review and best practices'
      ]
    }
  ];

  const handleBooking = (calendlyUrl: string) => {
    window.open(calendlyUrl, '_blank', 'width=700,height=600');
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Book a consultation to discuss your needs and explore how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {meetingTypes.map((meeting, index) => {
            const IconComponent = meeting.icon;
            return (
              <Card key={index} className="glass-effect border-border/50 hover-glow group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {meeting.duration}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-gradient">
                    {meeting.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {meeting.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">What we'll cover:</h4>
                    <ul className="space-y-2">
                      {meeting.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Button */}
                  <Button 
                    onClick={() => handleBooking(meeting.calendlyUrl)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule {meeting.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <Card className="glass-effect border-border/50 inline-block">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Available Monday - Friday</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Timezone: UTC+1 (CET)</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  <span>Video calls via Google Meet</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;