import { Brain, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export function Footer() {
  const quickLinks = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#" }
  ];

  const supportLinks = [
    { label: "FAQ", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Terms & Privacy", href: "#" }
  ];

  const contactInfo = [
    { icon: Mail, value: "hello@aiautomationacademy.com" },
    { icon: Phone, value: "+234 (0) 812-345-6789" },
    { icon: MapPin, value: "Lagos, Nigeria" }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaInstagram, href: "#", label: "Instagram" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-card border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company info */}
            <div data-testid="footer-company">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Brain className="text-white text-sm h-4 w-4" />
                </div>
                <span className="font-bold text-lg gradient-text">AI Automation Academy</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering African professionals with cutting-edge AI automation skills for the global digital economy.
              </p>
            </div>

            {/* Quick links */}
            <div data-testid="footer-quick-links">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-primary transition-colors text-left"
                      data-testid={`footer-link-${index}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div data-testid="footer-support">
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="hover:text-primary transition-colors"
                      data-testid={`footer-support-${index}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div data-testid="footer-contact">
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-center" data-testid={`contact-${index}`}>
                    <contact.icon className="mr-2 text-primary h-4 w-4" />
                    {contact.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0" data-testid="footer-copyright">
              © 2024 AI Automation Academy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6" data-testid="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${index}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
