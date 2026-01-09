import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("February 12, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3 bg-background/60 backdrop-blur-md border-b border-border/30 h-[64px] flex items-center">
      <div className="container mx-auto px-4 flex justify-center items-center gap-6 font-medium">
        <span className="text-muted-foreground hidden sm:inline uppercase tracking-widest text-xs">Hackathon Starts in :</span>
        <div className="flex gap-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <span className="text-gradient font-bold text-2xl leading-none">{item.value.toString().padStart(2, "0")}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};