import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, Award, BookOpen, Target, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Workshops = () => {
  const workshops = [
    {
      institution: "BIMS (Baroda Institute of Management Sciences)",
      program: "Comprehensive IELTS Training Program",
      duration: "8 weeks intensive course",
      year: "2024",
      participants: "25+ students per batch",
      location: "Vadodara, Gujarat",
      description: "Comprehensive IELTS preparation program focusing on all four modules: Listening, Reading, Writing, and Speaking. Designed to help students achieve their target band scores for international education and immigration.",
      highlights: [
        "Structured 8-week curriculum covering all IELTS modules",
        "Personalized feedback and progress tracking",
        "Mock tests and practice sessions",
        "Individual speaking practice sessions",
        "Writing assessment and improvement strategies"
      ],
      successRate: "92% students achieved target band scores",
      modules: ["Listening", "Reading", "Writing", "Speaking"]
    },
    {
      institution: "SVIT (Sardar Vallabhbhai Institute of Technology)",
      program: "English Language Proficiency Workshop",
      duration: "4 weeks intensive workshop",
      year: "2024",
      participants: "30+ engineering students",
      location: "Vadodara, Gujarat",
      description: "Specialized workshop for engineering students focusing on technical English communication, presentation skills, and professional language usage in technical environments.",
      highlights: [
        "Technical English communication skills",
        "Presentation and public speaking training",
        "Professional email and report writing",
        "Interview preparation for technical roles",
        "Group discussions and debates on technical topics"
      ],
      successRate: "95% improvement in communication confidence",
      modules: ["Technical Communication", "Presentation Skills", "Professional Writing", "Interview Prep"]
    }
  ];

  const teachingApproach = [
    {
      title: "Personalized Learning",
      description: "Tailored instruction based on individual student needs and learning styles",
      icon: Target
    },
    {
      title: "Practical Application",
      description: "Real-world scenarios and practice sessions for immediate skill application",
      icon: BookOpen
    },
    {
      title: "Continuous Assessment",
      description: "Regular feedback and progress tracking to ensure optimal learning outcomes",
      icon: CheckCircle
    },
    {
      title: "Interactive Methods",
      description: "Engaging teaching methods that encourage active participation and learning",
      icon: Users
    }
  ];

  const ieltsBandScores = [
    { band: "9.0", level: "Expert", description: "Has fully operational command of the language" },
    { band: "8.0-8.5", level: "Very Good", description: "Has fully operational command with occasional inaccuracies" },
    { band: "7.0-7.5", level: "Good", description: "Has operational command of the language" },
    { band: "6.0-6.5", level: "Competent", description: "Has generally effective command of the language" },
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Workshops & Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Empowering students with English language proficiency and IELTS preparation 
              through structured, result-oriented training programs at leading institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">Professional Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Delivering excellence in IELTS preparation and English language training
              </p>
            </div>

            <div className="space-y-12">
              {workshops.map((workshop, index) => (
                <Card key={index} className="overflow-hidden card-hover">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Workshop Info */}
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="font-display text-2xl mb-2">
                              {workshop.program}
                            </CardTitle>
                            <p className="text-primary font-semibold text-lg">{workshop.institution}</p>
                          </div>
                          <Badge variant="outline" className="ml-4">
                            {workshop.year}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Clock size={16} />
                            <span>{workshop.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users size={16} />
                            <span>{workshop.participants}</span>
                          </div>
                          <div className="flex items-center space-x-2 md:col-span-2">
                            <MapPin size={16} />
                            <span>{workshop.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {workshop.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Program Highlights</h4>
                          <div className="space-y-2">
                            {workshop.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <CheckCircle size={16} className="text-success mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                          <span className="font-semibold text-success">{workshop.successRate}</span>
                          <Award size={20} className="text-success" />
                        </div>
                      </CardContent>
                    </div>

                    {/* Modules Sidebar */}
                    <div className="bg-card p-6 lg:p-8 border-l border-border">
                      <h4 className="font-display text-lg font-semibold mb-4">Course Modules</h4>
                      <div className="space-y-3">
                        {workshop.modules.map((module, idx) => (
                          <div key={idx} className="p-3 bg-background/50 rounded-lg">
                            <p className="font-medium text-sm">{module}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">Teaching Methodology</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive approach focused on practical learning and measurable results
              </p>
            </div>

            <div className="feature-grid">
              {teachingApproach.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <Card key={index} className="card-hover text-center card-glass">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent size={32} className="text-success" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-4">{approach.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IELTS Band Score Guide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">IELTS Band Score Guide</h2>
              <p className="text-muted-foreground">
                Understanding the IELTS scoring system and what each band represents
              </p>
            </div>

            <div className="space-y-4">
              {ieltsBandScores.map((score, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="font-bold text-primary">{score.band}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{score.level} User</h3>
                          <p className="text-muted-foreground text-sm">{score.description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">IELTS</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-success/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Training Success</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proven results through dedicated instruction and comprehensive preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { metric: "55+", label: "Students Trained", icon: Users },
                { metric: "92%", label: "Success Rate", icon: Target },
                { metric: "7.5", label: "Average Band Score", icon: Award },
                { metric: "2", label: "Partner Institutions", icon: BookOpen }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center card-glass">
                    <CardContent className="p-6">
                      <IconComponent size={32} className="text-success mx-auto mb-4" />
                      <p className="text-3xl font-bold font-display mb-2">{stat.metric}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Ready to Start Your IELTS Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our proven IELTS preparation program and achieve your target band score 
              with expert guidance and comprehensive training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero">
                  Inquire About Training
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="btn-ghost">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Workshops;