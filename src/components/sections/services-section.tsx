import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import type { ServiceOffering } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services <span className="gradient-text">I Offer</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service: ServiceOffering, index: number) => (
            <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-background flex flex-col group">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
