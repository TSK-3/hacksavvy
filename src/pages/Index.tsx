import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AboutSection } from "@/components/AboutSection";
import { PrizesSection } from "@/components/PrizesSection";
import { FAQSection } from "@/components/FAQSection";
import { RegisterSection } from "@/components/RegisterSection";
import { FacultyCoordinators } from "@/components/FacultyCoordinators";
import { ThemesSection } from "@/components/ThemesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CountdownTimer />
      <div className="pt-[64px] space-y-24">
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <PrizesSection />
        <FAQSection />
        <RegisterSection />
        <FacultyCoordinators />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
