import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, Linkedin } from 'lucide-react';
import { generateDynamicWelcomeMessage, type DynamicWelcomeMessageInput } from '@/ai/flows/dynamic-welcome-message';
import { Card, CardContent } from '@/components/ui/card';

async function getWelcomeMessage() {
  const input: DynamicWelcomeMessageInput = {
    recentAccomplishments: "Reduced regression cycles by 30% at Cognizant, Established 95% test coverage at Prime Software.",
    yearsOfExperience: 5,
    currentTechTrends: "AI-powered solutions, data analytics, scalable automation, intelligent decision-making in data science and automation fields."
  };
  try {
    const result = await generateDynamicWelcomeMessage(input);
    return result.welcomeMessage;
  } catch (error) {
    console.error("Error generating welcome message:", error);
    // Fallback message
    return "Welcome! Explore my work in data science and automation.";
  }
}

export async function HomeSection() {
  const welcomeMessage = await getWelcomeMessage();

  return (
    <section id="home" className="section-padding min-h-screen flex items-center animated-gradient-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg md:text-xl text-primary font-medium">{welcomeMessage}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I’m K R Bharath
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A data scientist and automation expert combining 5 years of QA experience with advanced machine learning and data analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform">
              <a href="https://krbharath.tiiny.site" download="KR_Bharath_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg transform hover:scale-105 transition-transform">
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" /> Contact
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg transform hover:scale-105 transition-transform">
              <a href="https://linkedin.com/in/k-r-bharath" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="p-2 bg-card/50 backdrop-blur-sm shadow-2xl rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://i.postimg.cc/155mxqfB/BH2.jpg"
              alt="K R Bharath - Profile"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square"
              priority
              data-ai-hint="professional headshot"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

