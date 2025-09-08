import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "seopatebogo10@gmail.com",
      href: "mailto:seopatebogo10@gmail.com",
      primary: true,
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 66 157 0078",
      href: "tel:+27661570078",
      primary: true,
      description: "Call or WhatsApp for urgent matters"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "tebogo-seopa-190095240",
      href: "https://linkedin.com/in/tebogo-seopa-190095240",
      primary: false,
      description: "Connect with me professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "TebogoSeopa20",
      href: "https://github.com/TebogoSeopa20?tab=repositories",
      primary: false,
      description: "Explore my code and contributions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects, discuss opportunities, or just chat about technology? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Location Card */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 shadow-medium hover:shadow-large transition-all duration-300 mb-12 border border-primary/10">
            <div className="flex items-center justify-center gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Currently Based In</h3>
                <p className="text-lg text-muted-foreground">Johannesburg, South Africa</p>
                <p className="text-accent font-medium">University of the Witwatersrand • Final Year CS Student</p>
              </div>
            </div>
          </Card>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-white shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group border border-subtle"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-soft ${
                      method.primary ? 'bg-primary/10' : 'bg-accent/10'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        method.primary ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-foreground">{method.label}</h3>
                      <p className="text-muted-foreground mb-2 text-sm">{method.description}</p>
                      <p className="font-medium text-foreground mb-4">{method.value}</p>
                      <Button 
                        variant={method.primary ? "primary" : "accent"} 
                        size="default" 
                        asChild
                        className="group-hover:scale-105 transition-transform"
                      >
                        <a 
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Connect
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 shadow-colored border border-primary/10">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-colored">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a talented developer for your team, have an exciting project in mind, 
                want to discuss the latest in tech, or explore collaboration opportunities, I'm always eager to connect 
                with like-minded individuals and organizations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" size="xl" asChild>
                  <a href="mailto:seopatebogo10@gmail.com" className="inline-flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a 
                    href="https://linkedin.com/in/tebogo-seopa-190095240" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
