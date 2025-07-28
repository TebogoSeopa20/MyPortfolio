import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Plus, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my dedication to creating innovative solutions and contributing to the tech community. 
            More exciting projects coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coming Soon Card */}
          <Card className="p-8 bg-white shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group border border-subtle">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently working on exciting projects that showcase my skills in full-stack development, 
                AI/ML integration, and innovative web solutions.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                In Development
              </div>
            </div>
          </Card>

          {/* GitHub Portfolio Card */}
          <Card className="p-8 bg-white shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group border border-subtle">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Explore My Code</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Visit my GitHub profile to see my contributions to open source projects, 
                personal repositories, and coding journey.
              </p>
              <Button variant="outline" asChild className="group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                <a 
                  href="https://github.com/TebogoSeopa20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>

          {/* Academic Excellence Card */}
          <Card className="p-8 bg-white shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group border border-subtle">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Academic Excellence</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Throughout my Computer Science degree, I've completed numerous projects spanning 
                algorithms, software engineering, and system design.
              </p>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Final Year • Wits University
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in Collaborating?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always excited to work on innovative projects and connect with fellow developers. 
              Let's build something amazing together!
            </p>
          </div>
          <Button variant="primary" size="xl" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              <span>Let's Connect</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;