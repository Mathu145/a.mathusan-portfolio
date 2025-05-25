import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Send } from 'lucide-react';
import { Github } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { useState } from 'react';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll NOT get back to you.",
      });
      e.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the contact options to get in touch with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {' '}
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:mathusan.aiyaduraiiyer@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    mathusan.aiyaduraiiyer@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="tel:+41791234567"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +41 79 123 45 67
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="font-medium hover:text-primary transition-colors">
                    Bern, Switzerland
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/mathusansharma/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/Mathu145" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background 
                 focus:outline-none focus:ring-2 focus:ring-primary 
                 transition duration-200"
                placeholder="Max Mustermann"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background 
                 focus:outline-none focus:ring-2 focus:ring-primary 
                 transition duration-200"
                placeholder="max@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background 
                 focus:outline-none focus:ring-2 focus:ring-primary 
                 transition duration-200 resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'cosmic-button w-full flex items-center justify-center gap-2'
              )}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
