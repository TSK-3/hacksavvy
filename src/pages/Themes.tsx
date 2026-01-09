import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemesSection } from "@/components/ThemesSection";

const Themes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <ThemesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Themes;