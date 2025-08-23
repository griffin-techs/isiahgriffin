import { Card } from './ui/card';
import { Avatar } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    content: 'Isiah delivered an exceptional e-commerce platform that increased our conversion rate by 40%. His attention to detail and technical expertise are unmatched.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager at InnovateLab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Working with Isiah was a game-changer. He transformed our legacy system into a modern, scalable solution that handles 10x more traffic.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder at StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'Isiah\'s full-stack expertise helped us launch our MVP in record time. His code quality and architectural decisions set us up for long-term success.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by startups and enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-glow glass-effect relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/30" />
              
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12 mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}