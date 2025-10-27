import { Link } from "react-router-dom";
import { ChevronRight, Film, Music, Calendar, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

// Portfolio homepage for Satyajeet Shinde
const Index = () => {
  const categories = [
    // Workshops temporarily removed
    {
      title: "Filmography",
      description: "Cinematic storytelling through Direction, Acting, Screenplay Writing and Cinematography across diverse projects.",
      icon: Film,
      link: "/filmography",
      accent: "text-primary",
    },
    {
      title: "Music",
      description: "Welcome to my World of music where every note tells a story. I'm a singer weaving my emotions into melodies. Join me on this musical journey—one song at a time.",
      icon: Music,
      link: "/music",
      accent: "text-accent",
    },
  ];

  const featuredWorks = [
    {
      title: "Meri Zindagi",
      category: "Music Video",
      date: "2024",
      description: "A heartfelt music video exploring life's journey",
      image: "/placeholder-music.jpg",
      link: "https://youtu.be/ZwmgMYfTQ4A",
    },
    {
      title: "Latest Film Project",
      category: "Filmmaking",
      date: "2024",
      description: "Recent cinematographic work and direction",
      image: "/placeholder-film.jpg",
      link: "/filmography",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow animate-fade-in">
            Teaching, Filmmaking,
            <br />
            <span className="text-accent">Passion for Music</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Professional educator, creative filmmaker, and passionate storyteller 
            bringing vision to life through multiple artistic mediums.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="btn-hero">
              <Link to="/filmography" className="flex items-center space-x-2">
                <span>Explore Portfolio</span>
                <ChevronRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-ghost">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Touch</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Satyajeet Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A multifaceted creative professional with expertise spanning education, 
                  filmmaking, and music. With extensive experience in IELTS training at 
                  prestigious institutions and a passion for cinematic storytelling, 
                  He brings unique perspective to every project.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in Vadodara, Gujarat, combining technical excellence with 
                  creative vision to deliver impactful educational programs and 
                  compelling visual narratives.
                </p>
                <Button className="btn-ghost">
                  <Link to="/about" className="flex items-center space-x-2">
                    <span>Read Full Bio</span>
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 card-glass">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-display font-bold text-primary">SS</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold">Satyajeet R. Shinde</h3>
                    <p className="text-muted-foreground">Educator • Singer • Filmmaker • Passionate photographer</p>
                    <div className="pt-4">
                      {/* <Button variant="outline" size="sm">
                        <a 
                          href="/resume.pdf" 
                          target="_blank"
                          className="flex items-center space-x-2"
                        >
                          <span>Download Resume</span>
                          <ChevronRight size={16} />
                        </a>
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Areas of Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Exploring creativity across multiple disciplines with passion and precision
              </p>
            </div>

            <div className="feature-grid">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="card-hover card-glass group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent size={32} className={category.accent} />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-4">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <Button variant="ghost" className="group-hover:text-primary">
                        <Link to={category.link} className="flex items-center space-x-2">
                          <span>Explore</span>
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Featured Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Recent projects showcasing creativity across filmmaking, music, and education
              </p>
            </div>

            <div className="portfolio-grid">
              {featuredWorks.map((work, index) => (
                <Card key={index} className="card-hover overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                    <Play size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                      <span className="text-sm text-muted-foreground flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{work.date}</span>
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {work.description}
                    </p>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <Link to={work.link} className="flex items-center space-x-2">
                        <span>View Project</span>
                        <ArrowRight size={14} />
                      </Link>
                    </Button>
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

export default Index;