import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MessageCircle, Video, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookCallDialogProps {
  children: React.ReactNode;
}

const BookCallDialog = ({ children }: BookCallDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    meetingType: '',
    projectDetails: '',
    preferredDate: '',
    preferredTime: ''
  });

  const { toast } = useToast();

  const meetingTypes = [
    {
      value: '30-min',
      label: '30-Minute Discovery Call',
      description: 'Quick consultation to discuss your project needs',
      icon: MessageCircle
    },
    {
      value: '1-hour',
      label: '1-Hour Deep Dive',
      description: 'In-depth technical consultation for complex projects',
      icon: Video
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Booking Request Submitted!",
        description: "I'll get back to you within 24 hours to confirm the meeting details.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        meetingType: '',
        projectDetails: '',
        preferredDate: '',
        preferredTime: ''
      });
      
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectedMeeting = meetingTypes.find(type => type.value === formData.meetingType);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Book a Consultation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Let's discuss your project and explore how we can work together to bring your ideas to life.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Meeting Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-foreground">Meeting Type</Label>
            <div className="grid gap-3">
              {meetingTypes.map((meeting) => {
                const IconComponent = meeting.icon;
                return (
                  <Card 
                    key={meeting.value}
                    className={`cursor-pointer border-2 transition-all hover:border-primary/50 ${
                      formData.meetingType === meeting.value 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border'
                    }`}
                    onClick={() => handleInputChange('meetingType', meeting.value)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{meeting.label}</h4>
                          <p className="text-sm text-muted-foreground">{meeting.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {meeting.value === '30-min' ? '30 min' : '1 hour'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold text-foreground">
              Company (Optional)
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          {/* Preferred Timing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="text-sm font-semibold text-foreground">
                Preferred Date
              </Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="bg-background border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="text-sm font-semibold text-foreground">
                Preferred Time
              </Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger className="bg-background border-border focus:border-primary">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="projectDetails" className="text-sm font-semibold text-foreground">
              Project Details
            </Label>
            <Textarea
              id="projectDetails"
              placeholder="Tell me about your project, goals, timeline, and any specific challenges you're facing..."
              value={formData.projectDetails}
              onChange={(e) => handleInputChange('projectDetails', e.target.value)}
              className="min-h-[100px] bg-background border-border focus:border-primary resize-none"
            />
          </div>

          {/* Selected Meeting Summary */}
          {selectedMeeting && (
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Meeting Summary:</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedMeeting.label} - We'll discuss your project requirements, provide technical recommendations, and create a roadmap for moving forward.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !formData.name || !formData.email || !formData.meetingType}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Book Meeting
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog;