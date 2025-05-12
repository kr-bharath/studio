import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// The dynamic welcome message generation is replaced by a static message as per user request.
// async function getWelcomeMessage() {
//   const input: DynamicWelcomeMessageInput = {
//     recentAccomplishments: "Reduced regression cycles by 30% at Cognizant, Established 95% test coverage at Prime Software.",
//     yearsOfExperience: 5,
//     currentTechTrends: "AI-powered solutions, data analytics, scalable automation, intelligent decision-making in data science and automation fields."
//   };
//   try {
//     const result = await generateDynamicWelcomeMessage(input);
//     return result.welcomeMessage;
//   } catch (error) {
//     console.error("Error generating welcome message:", error);
//     // Fallback message
//     return "Welcome! Explore my work in data science and automation.";
//   }
// }

export function HomeSection() {
  const welcomeMessage = "Hi, I’m KR Bharath, a Data Scientist, Data Analyst, and Automation Specialist with a passion for leveraging data-driven insights and automation to solve complex business challenges. With 5 years of experience in QA automation and data science, I specialize in machine learning, predictive modeling, and statistical analysis to drive efficiency and innovation. Explore my projects, skills, and expertise as I continue to push the boundaries of data science and automation to create impactful solutions. Let’s connect and collaborate!";

  return (
    <section id="home" className="section-padding min-h-screen flex items-center animated-gradient-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg md:text-xl text-primary font-medium">{welcomeMessage}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I’m K R Bharath
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hi, I’m KR Bharath, a Data Scientist, Data Analyst, and Automation Specialist with a passion for leveraging data-driven insights and automation to solve complex business challenges. With 5 years of experience in QA automation and data science, I specialize in machine learning, predictive modeling, and statistical analysis to drive efficiency and innovation. Explore my projects, skills, and expertise as I continue to push the boundaries of data science and automation to create impactful solutions. Let’s connect and collaborate!
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
