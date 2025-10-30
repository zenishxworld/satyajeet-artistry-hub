import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Calendar, Music as MusicIcon, Heart, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Extend Window interface to include Instagram embed API
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const Music = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  
  // Load Instagram embed script and process embeds
  useEffect(() => {
    // Function to load and process Instagram embeds
    const loadInstagramEmbeds = () => {
      // Remove any existing script first
      const existingScript = document.getElementById('instagram-embed-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      // Create and add the script
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      
      // Process embeds after script loads
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      
      document.body.appendChild(script);
    };
    
    // Load embeds when component mounts
    loadInstagramEmbeds();
    
    // Clean up function
    return () => {
      const script = document.getElementById('instagram-embed-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const musicProjects = [
    {
      title: "Meri Zindagi",
      artist: "Satyajeet Shinde",
      year: "2024",
      genre: "Emotional/Life Journey",
      duration: "4:30",
      description: "A deeply personal music video that explores the ups and downs of life's journey. Through cinematic storytelling and emotional performances, this piece captures the essence of human experiences, dreams, and the resilience needed to overcome life's challenges.",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      behindTheScenes: [
        "Shot over 3 days in various locations across Vadodara",
        "Featured original music composition and lyrics",
        "Incorporated natural lighting for authentic emotional impact",
        "Collaborative effort with local musicians and crew"
      ],
      productionDetails: {
        director: "Satyajeet Shinde",
        cinematographer: "Satyajeet Shinde",
        editor: "Satyajeet Shinde",
        music: "Original Composition",
        location: "Vadodara, Gujarat"
      },
      stats: {
        views: "1.2K",
        likes: "98",
        comments: "15"
      }
    },
    {
      title: "Collaborative Music Project",
      artist: "Various Artists",
      year: "2024",
      genre: "Fusion",
      duration: "3:45",
      description: "A collaborative music video project bringing together local artists and musicians to create a unique fusion piece that celebrates the cultural diversity of Gujarat while incorporating modern musical elements.",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      behindTheScenes: [
        "Multi-artist collaboration project",
        "Fusion of traditional and contemporary music",
        "Community-focused production approach",
        "Showcased local talent and venues"
      ],
      productionDetails: {
        director: "Satyajeet Shinde",
        cinematographer: "Production Team",
        editor: "Collaborative Editing",
        music: "Multi-Artist Composition",
        location: "Various Venues, Gujarat"
      },
      stats: {
        views: "856",
        likes: "67",
        comments: "23"
      }
    }
  ];

  const musicSkills = [
    {
      title: "Music Video Direction",
      description: "Creating visual narratives that complement and enhance musical compositions",
      icon: MusicIcon
    },
    {
      title: "Storytelling Through Music",
      description: "Weaving emotional stories through the combination of music and visuals",
      icon: Heart
    },
    {
      title: "Creative Cinematography", 
      description: "Capturing the mood and energy of music through dynamic camera work",
      icon: Eye
    }
  ];

  const handleVideoClick = (index: number) => {
    setSelectedVideo(selectedVideo === index ? null : index);
  };

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Music Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Where music meets visual storytelling. Explore music videos and collaborative projects 
              that blend emotional narratives with compelling cinematography.
            </p>
          </div>
        </div>
      </section>





      {/* Instagram Videos */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-4">Instagram Reels</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Check out my latest music moments and behind-the-scenes clips</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 p-2">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              
              {/* Instagram Video 1 - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center bg-black/5">
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/C6rURPSCVIs/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
                      margin: '0', 
                      padding: '0', 
                      width: '100%',
                      height: '100%'
                    }}
                  >
                  </blockquote>
                </div>
              </div>
              
              {/* Instagram Video 2 - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center bg-black/5">
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/DMqBD9OTmIa/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
                      margin: '0', 
                      padding: '0', 
                      width: '100%',
                      height: '100%'
                    }}
                  >
                  </blockquote>
                </div>
              </div>

              {/* Instagram Video 3 - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center bg-black/5">
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/CbUxND4pcJY/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
                      margin: '0', 
                      padding: '0', 
                      width: '100%',
                      height: '100%'
                    }}
                  >
                  </blockquote>
                </div>
              </div>

              {/* Instagram Video 4 - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg card-hover">
                <div className="w-full h-full flex items-center justify-center">
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/CmcBeBDgOLZ/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
                      margin: '0', 
                      padding: '0', 
                      width: '100%',
                      height: '100%'
                    }}
                  >
                  </blockquote>
                </div>
              </div>

              {/* Instagram Video 5 - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg card-hover">
                <div className="w-full h-full flex items-center justify-center">
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/CtMrbioAcWQ/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
                      margin: '0', 
                      padding: '0', 
                      width: '100%',
                      height: '100%'
                    }}
                  >
                  </blockquote>
                </div>
              </div>
              
              {/* Instagram Video 6 - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg card-hover">
                <div className="w-full h-full flex items-center justify-center">
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/C0yxQ70JqBA/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
                      margin: '0', 
                      padding: '0', 
                      width: '100%',
                      height: '100%'
                    }}
                  >
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Other Projects</h2>
            
            <div className="space-y-8">
              {musicProjects.slice(1).map((project, index) => (
                <Card key={index + 1} className="card-hover overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div 
                      className="relative h-48 md:h-64 bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center cursor-pointer group"
                      onClick={() => handleVideoClick(index + 1)}
                    >
                      {selectedVideo === index + 1 ? (
                        <div className="video-container absolute inset-4">
                          <iframe
                            src={https://www.youtube.com/embed/${project.youtubeId}?autoplay=1}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <>
                          <Play size={40} className="text-white z-10 group-hover:scale-110 transition-transform" />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary">{project.genre}</Badge>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-primary font-medium mb-1">{project.artist}</p>
                      <p className="text-sm text-muted-foreground mb-4">{project.year}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Eye size={14} />
                            <span>{project.stats.views}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Heart size={14} />
                            <span>{project.stats.likes}</span>
                          </span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleVideoClick(index + 1)}
                        >
                          {selectedVideo === index + 1 ? "Close" : "Watch"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Music Video Skills */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Music Video Expertise</h2>
            
            <div className="feature-grid">
              {musicSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="card-hover card-glass text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent size={32} className="text-accent" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-4">{skill.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Create Your Music Video</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a song that needs a visual story? Let's collaborate to create a music video 
              that captures the essence of your music.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Start a Music Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Music;