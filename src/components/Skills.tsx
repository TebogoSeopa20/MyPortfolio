import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Database, Terminal, Smartphone, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "PHP", "C"],
      color: "primary"
    },
    {
      title: "Databases & Query",
      icon: Database,
      skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
      color: "accent"
    },
    {
      title: "Shell & Scripting",
      icon: Terminal,
      skills: ["Shell/Bash", "PowerShell", "Python Scripts"],
      color: "primary"
    },
    {
      title: "Interests & Hobbies",
      icon: Smartphone,
      skills: ["Open Source", "Hackathons", "Gaming", "AI/ML", "Music Production", "Photography", "Soccer"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in multiple programming languages with hands-on experience in modern technologies 
            and a passion for continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-white shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group border border-subtle"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${
                    category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      category.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="skill"
                      className="text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Certifications & Achievements</h3>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 shadow-colored hover:shadow-large transition-all duration-300 border border-primary/10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-colored">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-foreground">FNB APP ACADEMY 2025</h4>
              <p className="text-muted-foreground mb-4 text-lg">
                Successfully completed advanced application development training program, 
                demonstrating proficiency in modern software development practices.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                <Award className="w-4 h-4" />
                Certified Graduate
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;