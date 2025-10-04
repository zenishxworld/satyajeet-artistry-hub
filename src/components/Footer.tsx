import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Film, Music, Heart, Camera } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career Journey", path: "/career-journey" },
    { name: "Music Projects", path: "/music" },
    { name: "Filmography", path: "/filmography" },
    { name: "Photography", path: "/photography" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    { name: "Training & Development", icon: Film },
    { name: "Film Production", icon: Film },
    { name: "Music Videos", icon: Music }
  ];

  const contactInfo = [
    { icon: Phone, text: "+91-7351193066", href: "tel:+91-7351193066" },
    { icon: Mail, text: "satyajeetshinde178@gmail.com", href: "mailto:satyajeetshinde178@gmail.com" },
    { icon: MapPin, text: "Vadodara, Gujarat" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-primary mb-4 block">
              Satyajeet Shinde
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Filmmaker, IELTS trainer, and creative professional dedicated to 
              excellence in education and visual storytelling.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={14} className="text-accent fill-current" />
              <span>in Gujarat</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name} className="flex items-center space-x-2">
                    <IconComponent size={16} className="text-primary" />
                    <span className="text-muted-foreground">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center space-x-2">
                    <IconComponent size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{contact.text}</span>
                  </div>
                );

                return (
                  <li key={index}>
                    {contact.href ? (
                      <a href={contact.href} className="hover:text-primary transition-colors">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Satyajeet R. Shinde. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Get In Touch
              </Link>
              {/* <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Download Resume
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;