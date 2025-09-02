import { Award, Briefcase, GraduationCap, Star, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {


  const skills = [
    "IELTS Training & Assessment",
    "English Language Instruction",
    "Film Direction & Production",
    "Cinematography",
    "Acting & Performance",
    "Music Video Production",
    "Creative Writing",
    "Workshop Facilitation",
    "Team Leadership",
    "Project Management"
  ];

  const strengths = [
    {
      title: "Educational Excellence",
      description: "Proven track record in IELTS training with high success rates",
      icon: GraduationCap
    },
    {
      title: "Creative Vision",
      description: "Unique storytelling ability across multiple visual mediums",
      icon: Star
    },
    {
      title: "Technical Expertise",
      description: "Comprehensive understanding of film production and post-production",
      icon: Award
    },
    {
      title: "Leadership Skills",
      description: "Experience in managing teams and conducting professional workshops",
      icon: Briefcase
    }
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Satyajeet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              A passionate educator and creative professional dedicated to excellence in 
              Teaching, Filmmaking, and Artistic expression. Combining technical expertise 
              with creative vision to deliver impactful results across diverse projects.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Synopsis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Professional Synopsis</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Satyajeet R. Shinde is a multifaceted professional who seamlessly blends 
                    educational expertise with creative artistry. With a strong foundation in 
                    English language instruction and IELTS training, he has established himself 
                    as a trusted educator at leading institutions across Gujarat.
                  </p>
                  <p>
                    Beyond the classroom, Satyajeet's passion for visual storytelling has led 
                    him to explore filmmaking, direction, and music video production. His unique 
                    perspective combines analytical thinking from his educational background with 
                    creative vision, resulting in compelling and meaningful content.
                  </p>
                  <p>
                    Based in Vadodara, Gujarat, he continues to inspire students and audiences 
                    alike through his dual commitment to education and creative expression.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="card-glass">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 rounded-full p-3">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p className="text-muted-foreground">Vadodara, Gujarat, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* <Card className="card-glass">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 rounded-full p-3">
                        <Briefcase className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Current Focus</h3>
                        <p className="text-muted-foreground">IELTS Training, Creative Filmmaking & Educational Workshops</p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Skills & Strengths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-16">Skills & Strengths</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Core Strengths */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-8">Core Strengths</h3>
                <div className="space-y-6">
                  {strengths.map((strength, index) => {
                    const IconComponent = strength.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-primary/20 rounded-full p-3 flex-shrink-0">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{strength.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-8">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-2 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Let's Collaborate</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for professional IELTS training or creative filmmaking services, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-hero inline-flex items-center justify-center text-center"
              >
                Get In Touch
              </a>
              {/* <a 
                href="/resume.pdf" 
                target="_blank"
                className="btn-ghost inline-flex items-center justify-center text-center"
              >
                Download Resume
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;