import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CareerJourney = () => {
  const careerTimeline = [
    {
      role: "IELTS Faculty",
      company: "Future Link – Visa Consultants Pvt. Ltd.",
      period: "Jan 2019 – Present",
      location: "Vadodara, Gujarat",
      description:
        "Conducted IELTS training, grammar classes, mock tests, and one-on-one speaking sessions."
    },
    {
      role: "Head Faculty",
      company: "Capri Overseas – Visa Consultants",
      period: "Sept 2015 – Dec 2018",
      location: "Vadodara, Gujarat",
      description:
        "Delivered IELTS and spoken English lectures, reviewed SOPs, guided students in visa processing, and conducted weekly mocks."
    },
    {
      role: "IELTS Faculty",
      company: "Future Link – Visa Consultants Pvt. Ltd.",
      period: "May 2013 – Aug 2015",
      location: "Vadodara, Gujarat",
      description:
        "Taught IELTS and spoken English, led speaking clubs, and prepared students for visa interviews."
    },
    {
      role: "Counselor, IELTS Faculty & Operations Manager",
      company: "Beyyond Careers Pvt. Ltd.",
      period: "Aug 2012 – Mar 2013",
      location: "Vadodara, Gujarat",
      description:
        "Managed the center and taught IELTS, English grammar, and speaking sessions."
    },
    {
      role: "News Analyst",
      company: "TAM Media Research Pvt. Ltd.",
      period: "Dec 2010 – May 2012",
      location: "Vadodara, Gujarat",
      description:
        "Monitored news channels, coded and categorized news content, and created backup records."
    },
    {
      role: "English Faculty",
      company: "ENBEE Education Center",
      period: "Jun 2008 – May 2010",
      location: "Vadodara, Gujarat",
      description:
        "Conducted spoken English and grammar classes, IELTS speaking sessions, and personality development training."
    }
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Career Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              A detailed timeline of my professional journey and career milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-16">Professional Experience</h2>

            <div className="space-y-8">
              {careerTimeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <CardTitle className="text-xl font-display">{item.role}</CardTitle>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-primary font-medium">{item.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerJourney;
