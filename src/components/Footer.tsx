import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Tebogo Seopa
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Final year Computer Science student passionate about creating innovative 
              solutions with modern technologies. Always ready for new challenges and collaborations.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">University of the Witwatersrand</p>
              <p>BSc Computer Science • Class of 2025</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:seopatebogo10@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-white rounded-lg shadow-soft group-hover:shadow-medium transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">seopatebogo10@gmail.com</span>
              </a>
              <a 
                href="tel:+27661570078"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-white rounded-lg shadow-soft group-hover:shadow-medium transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+27 66 157 0078</span>
              </a>
            </div>
            
            <div className="flex gap-3 pt-2">
              <a 
                href="https://github.com/TebogoSeopa20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-soft hover:shadow-medium hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/tebogo-seopa-190095240" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-soft hover:shadow-medium hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-subtle mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
            © 2025. Build by Tebogo Seopa using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;