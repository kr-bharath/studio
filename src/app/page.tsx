import { MainLayout } from '@/components/layout/main-layout';
import { HomeSection } from '@/components/sections/home-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function PortfolioPage() {
  return (
    <MainLayout>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}
