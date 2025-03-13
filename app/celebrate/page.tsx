"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function CelebratePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Celebration confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 80, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 60 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.4), y: randomInRange(0, 0.3) },
        colors: ["#FF2E63", "#08D9D6", "#252A34", "#EAEAEA"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.6, 0.9), y: randomInRange(0, 0.3) },
        colors: ["#FF2E63", "#08D9D6", "#252A34", "#EAEAEA"],
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleBackClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF2E63", "#08D9D6", "#252A34", "#EAEAEA"],
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-primary/10">
      <div
        className={`max-w-xl text-center transition-all duration-1000 ease-in-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
      >
        <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary/30 backdrop-blur-sm mb-8 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-primary animate-heartbeat">
            A Treasured Surprise for My Bujju 💕
          </h1>
          <p className="font-sans text-lg text-card-foreground mb-6 text-balance italic">
            To My Dearest Bujju,
          </p>
          <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
            Every word in those 52 Reasons I Love You flows from the depths of my soul—every. single. one. They are not
            mere words, but the heartbeat of my love for you, a truth that defines me because of you.
          </p>
          <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
            You are the most enchanting, kind, loving, and tender soul I’ve ever known. The way you fill a room with
            your radiant glow, the endless love that pours from your heart, the effortless magic with which you make
            everyone feel adored—you are my miracle. And I am endlessly grateful you’re mine, my precious Bujju.
          </p>
          <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
            Watching you grow has filled me with boundless pride. The elegance you bring to life’s challenges, the
            fearless spirit with which you chase your dreams, the resilience you show against all odds—you ignite
            inspiration in me every day. You are my pride, my joy, my brightest star, my greatest gift.
          </p>
          <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
            And oh, your cooking! Each dish is a symphony of love and devotion, crafted with such care. The way you
            nurture me—feeding my heart and soul, tending to me with silent affection even when I hide my needs—it
            touches me deeply. I see every act of love, and it makes me adore you more with each bite.
          </p>
          <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
            The way you pamper me, the gentle patience you offer my silly quirks, the unwavering strength you lend me
            through every storm—I don’t say it enough, but my gratitude for you is a river that never runs dry. I feel
            like the luckiest soul alive, waking each dawn to the blessing of you by my side.
          </p>
          <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
            You are my truest confidante, my eternal love, my boundless happiness. My haven, my home, my always. This
            surprise is just the beginning—I can’t wait for our future, a canvas painted with love, laughter, and a
            lifetime of "us," glowing brighter with every shared moment.
          </p>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6 border-2 border-secondary animate-pulse">
            <Image
              src="/WhatsApp Image 2025-03-14 at 01.05.14_d86afb51.jpg"
              alt="Surprise hint"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-sans text-lg text-card-foreground italic text-balance">
            *Loveyoumorethananything, my darling Bujju.*
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in"
          onClick={handleBackClick}
        >
          Back to Birthday Wishes 💞
        </Link>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-secondary text-2xl animate-float"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>
    </div>
  );
}