import { Mail, Phone, MapPin, Send, User, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Other',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Message Sent Successfully! ✨",
          description: "Thank you for reaching out. I'll respond to your inquiry within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Other',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Error Sending Message",
        description: error.message || "There was a problem sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      detail: "+91-9974284035",
      description: "Available Mon-Sat, 9 AM - 6 PM",
      href: "tel:+919974284035"
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "satyajeetshinde178@gmail.com",
      description: "Response within 24 hours",
      href: "mailto:satyajeetshinde178@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Vadodara, Gujarat",
      description: "Available for local meetings",
      href: "#"
    }
  ];

  const inquiryTypes = [
    { value: "Film Collaboration", label: "Film Collaboration", icon: "🎬" },
    { value: "Music Inquiry", label: "Music Inquiry", icon: "🎵" },
    { value: "IELTS Training", label: "IELTS Training", icon: "🎯" },
    { value: "Other", label: "Other", icon: "💬" }
  ];

  const services = [
    {
      title: "IELTS Training",
      description: "Comprehensive IELTS preparation for academic and general modules",
      features: ["All 4 modules covered", "Mock tests included", "Personalized feedback"]
    },
    {
      title: "Filmmaking Services",
      description: "Professional video production and creative direction",
      features: ["Music videos", "Short films", "Documentary production"]
    },
    {
      title: "Educational Workshops",
      description: "English language and communication skills training",
      features: ["Corporate training", "Academic institutions", "Custom curriculum"]
    }
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Ready to start your IELTS journey, collaborate on a creative project, or inquire about workshops? 
              I'm here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center space-x-2">
                    <MessageCircle className="text-primary" size={24} />
                    <span>Send a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll respond to your inquiry within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50"
                          placeholder="Your full name"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50"
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Type of Inquiry</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.icon} {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50 resize-none"
                        placeholder="Please provide details about your inquiry, including any specific requirements or questions you may have..."
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-hero"
                      disabled={isSubmitting}
                    >
                      <Send size={18} className="mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <Card className="card-glass">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => {
                        const IconComponent = info.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="text-primary" size={20} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{info.title}</h3>
                              <a 
                                href={info.href}
                                className="text-primary font-medium hover:underline block mb-1"
                              >
                                {info.detail}
                              </a>
                              <p className="text-sm text-muted-foreground">{info.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="card-glass">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-success" size={24} />
                      <div>
                        <h3 className="font-semibold">Quick Response</h3>
                        <p className="text-sm text-muted-foreground">
                          I typically respond to all inquiries within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Professional Info */}
                <Card className="card-glass">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Professional Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold flex items-center space-x-2">
                          <User size={16} />
                          <span>Satyajeet R. Shinde</span>
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Filmmaker • IELTS Trainer • Creative Professional
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {["IELTS Training", "Filmmaking", "Music Videos", "Educational Workshops"].map((spec, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">Services Available</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional services across education, filmmaking, and creative collaboration
              </p>
            </div>

            <div className="feature-grid">
              {services.map((service, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <h3 className="font-display text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-sm">
                          <CheckCircle size={14} className="text-success" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is your IELTS training success rate?",
                  a: "Our IELTS training programs have achieved a 92% success rate, with most students reaching their target band scores within the 8-week intensive course."
                },
                {
                  q: "Do you offer online training sessions?",
                  a: "Yes, I offer both in-person and online training sessions to accommodate different learning preferences and geographical constraints."
                },
                {
                  q: "What types of filmmaking projects do you work on?",
                  a: "I work on various projects including music videos, short films, documentaries, and educational content. Each project is tailored to meet specific creative and budgetary requirements."
                },
                {
                  q: "How far in advance should I book training or workshops?",
                  a: "For IELTS training, I recommend booking at least 2-3 weeks in advance. For filmmaking projects and workshops, timing can vary based on project complexity and requirements."
                }
              ].map((faq, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;