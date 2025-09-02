import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const quizQuestions = [
  {
    id: 'q1',
    question: '🎯 What\'s Isiah\'s coding philosophy?',
    answer: 'Isiah believes in writing clean, maintainable code that solves real problems. He focuses on user experience first, then builds robust backend systems to support it. His motto is "Code with purpose, design with empathy."'
  },
  {
    id: 'q2',
    question: '🚀 What was his most challenging project?',
    answer: 'His most challenging project was building a real-time trading platform that handled thousands of concurrent users. It required advanced WebSocket architecture, complex state management, and bulletproof error handling. The project taught him the importance of scalable architecture.'
  },
  {
    id: 'q3',
    question: '⚡ What\'s his superpower as a developer?',
    answer: 'Isiah\'s superpower is his ability to translate complex business requirements into elegant technical solutions. He excels at bridging the gap between stakeholders and development teams, ensuring everyone stays aligned throughout the project lifecycle.'
  },
  {
    id: 'q4',
    question: '🎨 How does he approach UI/UX design?',
    answer: 'Isiah approaches design with a mobile-first mindset and accessibility at the core. He believes great design is invisible - users should accomplish their goals effortlessly. He often prototypes in Figma before coding to validate user flows.'
  },
  {
    id: 'q5',
    question: '📚 What\'s he learning right now?',
    answer: 'Currently diving deep into AI/ML integration with web applications, exploring edge computing, and mastering advanced TypeScript patterns. He\'s also experimenting with Web3 technologies and their practical applications in traditional web apps.'
  }
];

const botResponses = {
  greeting: [
    "Hi! I'm Isiah's AI assistant. I can help you learn about his work, skills, and projects. Try clicking on the quiz questions below to discover more about him!",
    "Hello! I'm here to help you explore Isiah's portfolio. Check out the quiz questions below or ask me anything about his projects, experience, or skills!",
    "Hey there! I can answer questions about Isiah's background, projects, and expertise. Click on any quiz question below or ask me directly!"
  ],
  projects: [
    "Isiah has worked on various full-stack projects including e-commerce platforms, real-time applications, and modern web apps using React, Node.js, and TypeScript. He's particularly skilled in creating scalable, user-friendly applications.",
    "His portfolio showcases projects ranging from complex dashboards to interactive web applications. He specializes in modern JavaScript frameworks and has experience with both frontend and backend development."
  ],
  skills: [
    "Isiah is proficient in React, TypeScript, Node.js, Python, and modern web technologies. He also has experience with databases, cloud services, and DevOps practices.",
    "His technical stack includes frontend frameworks like React and Vue, backend technologies like Node.js and Python, plus databases like PostgreSQL and MongoDB."
  ],
  experience: [
    "Isiah has 5+ years of experience in full-stack development, working on projects for various industries including fintech, e-commerce, and SaaS applications.",
    "He has experience working in both startup and enterprise environments, leading development teams and architecting scalable solutions."
  ],
  contact: [
    "You can reach Isiah through the contact form on this site, connect with him on LinkedIn, or check out his work on GitHub. He's always open to discussing new opportunities!",
    "Feel free to use the contact section below to get in touch with Isiah directly. He typically responds within 24 hours."
  ]
};

function getRandomResponse(category: keyof typeof botResponses): string {
  const responses = botResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return getRandomResponse('greeting');
  }
  
  if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
    return getRandomResponse('projects');
  }
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
    return getRandomResponse('skills');
  }
  
  if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('career')) {
    return getRandomResponse('experience');
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('hire') || lowerMessage.includes('email')) {
    return getRandomResponse('contact');
  }
  
  return "I can help you learn about Isiah's projects, skills, experience, and how to contact him. Try asking about his technical skills, recent projects, or professional background!";
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Isiah's AI assistant. Ask me about his projects, skills, or experience!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuizClick = (question: typeof quizQuestions[0]) => {
    setShowQuiz(false);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: question.question,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: question.answer,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setShowQuiz(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-glow",
          "bg-primary hover:bg-primary/90",
          isOpen && "bg-destructive hover:bg-destructive/90"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Chat Window */}
      <div className={cn(
        "fixed bottom-24 right-6 w-80 h-96 z-40 transition-all duration-300",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="glass-effect rounded-lg h-full flex flex-col border border-border">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-sm">AI Assistant</h3>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.isBot ? "justify-start" : "justify-end"
                  )}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[70%] rounded-lg p-2 text-xs",
                      message.isBot
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary text-primary-foreground ml-auto"
                    )}
                  >
                    {message.content}
                  </div>
                  {!message.isBot && (
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-accent" />
                    </div>
                  )}
                </div>
              ))}

              {/* Quiz Questions */}
              {showQuiz && messages.length === 1 && (
                <div className="space-y-2 mt-4">
                  <div className="text-xs text-muted-foreground text-center mb-2">
                    👆 Click a question to learn more about Isiah
                  </div>
                  {quizQuestions.map((quiz) => (
                    <Button
                      key={quiz.id}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start h-auto py-2 px-3 text-xs hover:bg-accent/10"
                      onClick={() => handleQuizClick(quiz)}
                    >
                      {quiz.question}
                    </Button>
                  ))}
                </div>
              )}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-muted text-muted-foreground rounded-lg p-2 text-xs">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-current rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Isiah's work..."
                className="flex-1 h-8 text-xs"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="sm"
                className="h-8 w-8 p-0"
                disabled={isTyping || !inputValue.trim()}
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}