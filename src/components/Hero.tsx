import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import professionalPortrait from "@/assets/professional-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium tracking-wide">Hello, I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Tebogo Jan Seopa
                </h1>
                <div className="text-2xl lg:text-3xl text-muted-foreground">
                  <span className="block">Computer Science Student &</span>
                  <span className="text-primary font-semibold">Full-Stack Developer</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Final year Computer Science student at the University of the Witwatersrand, 
                passionate about creating innovative solutions with modern technologies. 
                Ready to make an impact in the tech industry.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="xl" asChild>
                <a href="#projects" className="inline-flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/TebogoSeopa20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/tebogo-seopa-190095240" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:seopatebogo10@gmail.com"
                className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+27661570078"
                className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-white rounded-3xl shadow-large p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={professionalPortrait} 
                  alt="Tebogo Seopa" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-colored font-medium">
                CS Student 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;