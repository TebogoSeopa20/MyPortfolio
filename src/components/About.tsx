import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science student with a strong academic background, 
            diverse technical skills, and a commitment to excellence in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-medium hover:shadow-large transition-all duration-300 border border-subtle">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Details</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-medium text-foreground">Born:</span> February 17, 2004</p>
                    <p><span className="font-medium text-foreground">Age:</span> 20 years old</p>
                    <p><span className="font-medium text-foreground">Location:</span> Johannesburg, South Africa</p>
                    <p><span className="font-medium text-foreground">Phone:</span> +27 66 157 0078</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-medium hover:shadow-large transition-all duration-300 border border-subtle">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Current Status</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Final year Computer Science student at the University of the Witwatersrand, 
                    graduating in 2025. Passionate about creating innovative solutions and contributing 
                    to open source projects.
                  </p>
                  <div className="flex items-center gap-2 text-sm bg-accent/10 text-accent px-3 py-2 rounded-lg font-medium">
                    <Award className="w-4 h-4" />
                    FNB APP ACADEMY 2025 Graduate
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Education Journey</h3>
            
            {/* Timeline */}
            <div className="space-y-6">
              <div className="relative pl-8 pb-6">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-medium"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
                <Card className="p-5 bg-white shadow-soft hover:shadow-medium transition-all duration-300 border border-subtle">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">2022 - 2025</span>
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">University of the Witwatersrand</h4>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-accent mt-1 font-medium">Johannesburg, Gauteng</p>
                </Card>
              </div>

              <div className="relative pl-8 pb-6">
                <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-medium"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-accent to-muted-foreground"></div>
                <Card className="p-5 bg-white shadow-soft hover:shadow-medium transition-all duration-300 border border-subtle">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium bg-accent/10 px-2 py-1 rounded">2017 - 2021</span>
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">Mahoai High School</h4>
                  <p className="text-muted-foreground">Matric with 6/7 Distinctions</p>
                  <p className="text-sm text-accent mt-1 font-medium">Mathematics & Sciences Stream • Polokwane, Limpopo</p>
                </Card>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-muted-foreground/60 rounded-full border-4 border-white shadow-soft"></div>
                <Card className="p-5 bg-white shadow-soft hover:shadow-medium transition-all duration-300 border border-subtle">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">2010 - 2016</span>
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">Dibeng Primary School</h4>
                  <p className="text-muted-foreground">Primary Education</p>
                  <p className="text-sm text-muted-foreground mt-1">Polokwane, Limpopo</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;