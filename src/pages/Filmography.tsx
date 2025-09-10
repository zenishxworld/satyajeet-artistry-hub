import { useState } from "react";
import { Play, Calendar, MapPin, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Filmography = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filmProjects = [
    // Existing demo projects
    {
      title: "Meri Zindagi",
      year: "2024",
      role: "Director, Producer",
      genre: "Music Video",
      duration: "5:35",
      location: "Vadodara, Gujarat",
      description: "A heartfelt music video exploring the journey of life through emotional storytelling and cinematic visuals.",
      youtubeId: "ZwmgMYfTQ4A", // Placeholder - replace with actual video ID
      cast: ["Satyajeet Shinde"],
      crew: ["Director: Satyajeet Shinde", "Producer: Satyajeet Shinde", "Cinematography: Satyajeet Shinde"],
      awards: [],
    },
    {
      title: "Educational Documentary",
      year: "2024",
      role: "Director, Cinematographer",
      genre: "Documentary",
      duration: "15:00",
      location: "Various Institutes, Gujarat",
      description: "A documentary showcasing the impact of modern education and IELTS training on students' international aspirations.",
      youtubeId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      cast: ["Various Students", "Faculty Members"],
      crew: ["Director: Satyajeet Shinde", "Cinematography: Satyajeet Shinde", "Editor: Satyajeet Shinde"],
      awards: [],
    },
    {
      title: "Short Film Project",
      year: "2023",
      role: "Actor, Co-Director",
      genre: "Drama",
      duration: "12:45",
      location: "Gujarat",
      description: "An independent short film exploring themes of ambition, creativity, and personal growth in contemporary society.",
      youtubeId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      cast: ["Satyajeet Shinde", "Local Actors"],
      crew: ["Co-Director: Satyajeet Shinde", "Cinematography: Team", "Sound: Post-Production Team"],
      awards: [],
    },
    // Real filmography entries
    {
      title: "Inse Milye",
      year: "2024",
      role: "Actor, Cinematographer",
      genre: "Short Film",
      duration: "N/A",
      location: "Vadodara, Gujarat",
      description: "A short film portraying a heartfelt narrative with strong visuals and emotional depth.",
      youtubeId: "1HqRPRkodnc",
      cast: ["Satyajeet Shinde"],
      crew: ["Actor: Satyajeet Shinde", "Cinematographer: Satyajeet Shinde"],
      awards: [],
    },
    {
      title: "Shaurya – Scene Reenactment",
      year: "2024",
      role: "Brigadier Rudra Pratap Singh (Actor)",
      genre: "Scene Reenactment",
      duration: "N/A",
      location: "Vadodara, Gujarat",
      description: "A powerful scene reenactment from the movie Shaurya, showcasing leadership, courage, and performance.",
      youtubeId: "AL4mX3qdVUw",
      cast: ["Satyajeet Shinde"],
      crew: ["Actor: Satyajeet Shinde"],
      awards: [],
    },
    {
      title: "The Last Chance",
      year: "2024",
      role: "Actor",
      genre: "Short Film",
      duration: "N/A",
      location: "Vadodara, Gujarat",
      description: "A dramatic short film exploring decisions, regret, and redemption.",
      youtubeId: "leu7TSJ6oAo",
      cast: ["Satyajeet Shinde"],
      crew: ["Actor: Satyajeet Shinde"],
      awards: [],
    },
    // {
    //   title: "Rangeen",
    //   year: "2024",
    //   role: "Actor",
    //   genre: "Short Film",
    //   duration: "N/A",
    //   location: "Vadodara, Gujarat",
    //   description: "A vibrant short film with colorful storytelling and dynamic expressions.",
    //   youtubeId: "y0Mu4MoLpak",
    //   cast: ["Satyajeet Shinde"],
    //   crew: ["Actor: Satyajeet Shinde"],
    //   awards: [],
    // },
    {
      title: "Screwed",
      year: "2024",
      role: "Actor, Cinematographer",
      genre: "Short Film",
      duration: "N/A",
      location: "Vadodara, Gujarat",
      description: "A gritty short film capturing intense emotions with stunning cinematography.",
      youtubeId: "eBqeUcmq3xE",
      cast: ["Satyajeet Shinde"],
      crew: ["Actor: Satyajeet Shinde", "Cinematographer: Satyajeet Shinde"],
      awards: [],
    },
    {
      title: "Future Link – Official Ad Film",
      year: "2024",
      role: "Director, Concept Creator",
      genre: "Advertisement",
      duration: "N/A",
      location: "Vadodara, Gujarat",
      description: "A corporate ad film promoting the values and vision of Future Link Consultants.",
      youtubeId: "w--NEqPjzEk",
      cast: [],
      crew: ["Director: Satyajeet Shinde", "Concept: Satyajeet Shinde"],
      awards: [],
    },
    {
      title: "SVIT Workshop Recap",
      year: "2023",
      role: "Workshop Conductor & Filmmaking Mentor",
      genre: "Workshop Documentation",
      duration: "N/A",
      location: "Vasad, Gujarat",
      description: "A 5-day filmmaking workshop conducted at SVIT, showcasing hands-on film training for students.",
      youtubeId: null, // Facebook video
      facebookEmbed: true,
      facebookUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvarun.vasava%2Fvideos%2F721789507852026%2F&show_text=0&width=400",
      cast: ["SVIT Students"],
      crew: ["Workshop Conductor: Satyajeet Shinde", "Filmmaking Mentor: Satyajeet Shinde"],
      awards: [],
    }
  ];

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Filmography
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              A collection of cinematic works showcasing storytelling through visual medium. 
              From music videos to documentaries, each project represents a unique creative journey.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {filmProjects.map((project, index) => (
                <Card key={index} className="card-hover overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Video Preview */}
                    <div 
                      className="relative h-64 lg:h-80 bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center cursor-pointer group"
                      onClick={() => handleProjectClick(index)}
                    >
                      {selectedProject === index ? (
                        <div className="video-container absolute inset-4">
                          {project.facebookEmbed ? (
                            <iframe
                              src={project.facebookUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 'none', overflow: 'hidden' }}
                              scrolling="no"
                              frameBorder="0"
                              allowTransparency={true}
                              allowFullScreen={true}
                            />
                          ) : (
                            <iframe
                              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                              title={project.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          )}
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                          <Play size={48} className="text-white z-10 group-hover:scale-110 transition-transform" />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-black/60 text-white">
                              {project.genre}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <Badge variant="secondary" className="bg-black/60 text-white">
                              {project.duration}
                            </Badge>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="p-6 lg:p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="font-display text-2xl">{project.title}</CardTitle>
                          <span className="text-muted-foreground font-medium">{project.year}</span>
                        </div>
                        <p className="text-primary font-medium">{project.role}</p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar size={16} />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin size={16} />
                            <span>{project.location}</span>
                          </div>
                          {project.cast.length > 0 && (
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground sm:col-span-2">
                              <Users size={16} />
                              <span>Cast: {project.cast.join(", ")}</span>
                            </div>
                          )}
                        </div>

                        {/* Crew Information */}
                        {project.crew.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Crew</h4>
                            <div className="space-y-1">
                              {project.crew.map((member, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">{member}</p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Awards (if any) */}
                        {project.awards.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Award size={16} />
                              <span>Awards & Recognition</span>
                            </h4>
                            <div className="space-y-1">
                              {project.awards.map((award, idx) => (
                                <Badge key={idx} variant="outline">{award}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <Button 
                          onClick={() => handleProjectClick(index)}
                          className="w-full sm:w-auto"
                        >
                          {selectedProject === index ? "Close Video" : "Watch Now"}
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Filmmaking Expertise</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive skills across all aspects of film production, from pre-production planning to post-production finishing.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Direction",
                "Cinematography", 
                "Acting",
                "Production",
                "Post-Production",
                "Storytelling",
                "Music Videos",
                "Documentaries"
              ].map((skill, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Let's Create Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a story to tell or a vision to bring to life? Let's collaborate on your next creative project.
            </p>
            <Button size="lg" className="btn-hero">
              <a href="/contact">Start a Project</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Filmography;