import { Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const FacultyCoordinators = () => {
  const coordinators = [
    { name: "Dr. Ch. Ramesh Babu", phone: "9985677767", image: "/placeholder.svg" },
    { name: "Dr. V. Subba Ramaiah", phone: "9393005221" },
    { name: "Dr. A. Ratna Raju", phone: "8328255486", image: "/coordinators/ratna-raju.png" },
    { name: "Dr. P. Shyam Sunder", phone: "9666660051", image: "https://mgit.ac.in/wp-content/uploads/2024/03/Shyam-Sunder.jpeg" },
    { name: "Dr. K. Madhubabu", phone: "7780327440", image: "/placeholder.svg" },
    { name: "Dr. Meera Alphy", phone: "8547586410", image: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-primary text-center">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinators.map((coordinator) => (
              <div 
                key={coordinator.name} 
                className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors flex items-center gap-4 group"
              >
                <Avatar className="h-20 w-20 border-2 border-border group-hover:border-primary/50 transition-colors">
                  <AvatarImage src={coordinator.image} alt={coordinator.name} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                    {coordinator.name.split(' ').filter(n => !n.includes('.')).map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="relative group/marquee whitespace-nowrap overflow-hidden">
                    <div className="font-medium group-hover/marquee:text-primary transition-colors inline-block group-hover/marquee:animate-marquee-slow">
                      {coordinator.name}
                    </div>
                  </div>
                  <a 
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {coordinator.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
