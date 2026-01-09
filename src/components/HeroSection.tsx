import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { useRegisterDialog } from "@/hooks/use-register-dialog";

export const HeroSection = () => {
  const { onOpen } = useRegisterDialog();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Radial glow background */}
      <div className="absolute inset-0 radial-glow" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: "-3s"
    }} />
      
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <span className="text-foreground mr-4">HACK</span>
            <span className="text-gradient glow-text">SAVVY</span>
            <span className="text-foreground">-26</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl font-medium mb-12 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Unleash innovation at MGIT’s ultimate 36-hour hackathon experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="xl" className="px-12 py-8 text-xl" onClick={onOpen}>
              Register Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{
          animationDelay: "0.5s"
        }}>
          {[{
            value: "₹2L+",
            label: "Prize Pool"
          }, {
            value: "36",
            label: "Hours"
          }, {
            value: "100+",
            label: "Teams"
          }, {
            value: "10+",
            label: "Themes"
          }].map(stat => <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};