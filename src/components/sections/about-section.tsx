import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 flex justify-center">
            <Card className="p-2 bg-card/80 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-sm">
               <Image
                src="https://i.postimg.cc/W184KcmD/istockphoto-1387900612-612x612.jpg"
                alt="K R Bharath"
                width={350}
                height={400}
                className="rounded-md object-cover aspect-[3/4]"
                data-ai-hint="profile image"
              />
            </Card>
          </div>
          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="mr-3 h-7 w-7 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  K R Bharath is a data-driven technologist with 5+ years in QA automation and a Master’s in Data Science from Guvi (IIT Chennai). With deep expertise in Python, SQL, TensorFlow, Scikit-learn, Selenium, and Cypress, he optimizes business workflows through scalable, AI-powered solutions.
                </p>
                <p>
                  Bharath thrives on solving real-world problems by blending software engineering and data science to empower intelligent decision-making.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <GraduationCap className="mr-3 h-7 w-7 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {education.map((edu, index) => (
                    <li key={index} className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-card/50 rounded-md">
                      <div>
                        <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                      <p className="text-sm text-primary font-medium mt-1 sm:mt-0">{edu.year}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

