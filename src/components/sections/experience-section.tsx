import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { experiences } from "@/lib/data";
import type { JobExperience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <Card className="p-0 md:p-6 bg-background shadow-xl">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {experiences.map((exp: JobExperience, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-muted/50 last:border-b-0">
                <AccordionTrigger className="hover:no-underline p-4 md:p-6 text-left">
                  <div className="flex items-center w-full">
                    <exp.icon className="h-8 w-8 mr-4 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company} | {exp.duration}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 md:p-6 pt-0">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
