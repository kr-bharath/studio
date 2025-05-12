"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col overflow-hidden group bg-card">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.dataAiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardHeader className="relative z-10 -mt-12">
                <div className="flex items-center mb-2">
                   <div className="p-2 bg-primary rounded-full mr-3 shadow-md">
                     <project.icon className="h-6 w-6 text-primary-foreground" />
                   </div>
                   <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  <TooltipProvider>
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <Tooltip key={techIndex} delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Badge variant="secondary" className="cursor-default bg-background text-foreground border-primary/30 hover:bg-primary/80 hover:text-primary-foreground">
                            {tech}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Technology: {tech}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </CardContent>
              <CardFooter>
                 <a
                    href="#" // Replace with actual project link if available
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center text-sm"
                    onClick={(e) => { if (e.currentTarget.href.endsWith('#')) e.preventDefault();}} // Prevent jump if href is #
                  >
                    View Project (if available) <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
