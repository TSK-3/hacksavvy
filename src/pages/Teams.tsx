import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Code, Lightbulb, Rocket } from "lucide-react";

const teams = [
  {
    name: "Organizing Team",
    description: "The core team responsible for planning and executing HackSavvy-26.",
    members: ["Core Committee", "Technical Team", "Logistics Team", "Marketing Team"],
    icon: Users,
  },
  {
    name: "Technical Mentors",
    description: "Experts from industry and academia to guide participants.",
    members: ["Software Engineers", "AI Specialists", "System Architects"],
    icon: Code,
  },
  {
    name: "Advisory Board",
    description: "Senior faculty and industry leaders providing strategic direction.",
    members: ["Dept Heads", "Industry Partners", "Academic Advisors"],
    icon: Lightbulb,
  },
  {
    name: "Student Volunteers",
    description: "Dedicated student body ensuring smooth operation during the event.",
    members: ["Registration Desk", "Technical Support", "Event Management"],
    icon: Rocket,
  }
];

const Teams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Teams</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet the people behind HackSavvy-26 who are working to make this hackathon an unforgettable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teams.map((team) => (
              <div key={team.name} className="p-8 rounded-2xl border border-border bg-card hover-elevate">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <team.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">{team.name}</h2>
                <p className="text-muted-foreground mb-6">{team.description}</p>
                <div className="flex flex-wrap gap-2">
                  {team.members.map((member) => (
                    <span key={member} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Teams;