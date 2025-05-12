import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/lib/data";
import type { SkillCategory } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category: SkillCategory, index: number) => (
            <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl">
                  <category.icon className="h-7 w-7 mr-3 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1 bg-card text-foreground border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
