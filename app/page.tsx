"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function BirthdayPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

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

    const timer = setTimeout(() => setShowMessage(true), 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleCelebrateClick = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF2E63", "#08D9D6", "#252A34", "#EAEAEA"],
    });
  };

  const galleryItems = [
    "/WhatsApp Image 2025-03-14 at 01.05.05_83ff6dac.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.04_b2407b5b.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.42_8ee521d5.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.40_05c0fbf9.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.29_65057f97.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.27_3e26e17a.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.26_e63fe48b.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.22_1f45d2cf.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.19_a2b12f2b.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.18_51fee94b.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.18_18b3249e.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.16_ad858964.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.08_c35a784b.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.10_6e702145.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.12_dce292da.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.12_60700d7c.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.11_e5dd0add.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.13_6bef8bf3.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.15_091266f4.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.43_476b30f3.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.31_999e07c0.jpg",
    "/WhatsApp Image 2025-03-14 at 01.05.33_814f7afb.jpg",
    "/WhatsApp Image 2025-01-29 at 13.02.19_46e8b39a.jpg",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-primary/10 overflow-hidden">
      <div
        className={`max-w-3xl w-full text-center transition-all duration-1000 ease-in-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
      >
        <h1 className="font-serif text-5xl md:text-7xl mb-8 text-primary animate-pulse">
          Happy Birthday, <span className="text-primary-foreground">Bujju!</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-foreground/80 mb-10 max-w-xl mx-auto text-balance">
          To my sweetest love, my everything—today is all about you, because you make my world brighter than the stars.
        </p>

        <div className="relative w-full max-w-md mx-auto mb-12 border-4 border-primary-foreground rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <Image src="/placeholder-main.jpg" alt="Us together" fill className="object-cover" priority />
        </div>

        <div className={`transition-opacity duration-1000 ${showMessage ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-12 border border-primary/20">
            <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
              Bujju, you’re the magic in my every day—your laughter a melody that lifts my spirit, your heart a haven
              that holds me close. Each moment with you is a treasure I’ll cherish forever.
            </p>
            <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
              From our late-night talks to our spontaneous adventures, like the day we stumbled upon that cozy little
              café, every memory with you is a brushstroke on the canvas of our love.
            </p>
            <p className="font-sans text-lg text-card-foreground mb-4 text-balance">
              I’m endlessly grateful for you—my joy, my light, my love. Today, I celebrate you, and I can’t wait to share
              a future filled with more laughter, more love, and more of us.
            </p>

            {/* Improved Photo Gallery */}
            <div className="w-full mt-8 mb-6 overflow-x-auto scroll-smooth scrollbar-hide">
              <div className="flex gap-6 px-4 py-2" style={{ scrollSnapType: "x mandatory" }}>
                {galleryItems.map((src, index) => (
                  <div
                    key={index}
                    className="snap-center shrink-0 w-72 h-96 relative rounded-xl overflow-hidden border-2 border-secondary/50 bg-secondary/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary"
                  >
                    <Image
                      src={src}
                      alt={`Memory ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="font-sans text-lg text-card-foreground text-balance">
              On this special day, I want you to feel as extraordinary as you make me feel every moment. You deserve all
              the happiness in the world, my Bujju—my muse, my heart, my forever adventure.
            </p>
          </div>
        </div>

        <Link
          href="/celebrate"
          onClick={handleCelebrateClick}
          className="inline-block px-10 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-medium text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl mb-16 border border-primary-foreground/20"
        >
          Let’s Celebrate You!
        </Link>

        <p className="font-['Dancing_Script'] text-3xl text-primary-foreground animate-fade-in">
          Forever Yours, Sahil
        </p>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => {
          const colors = ["text-primary", "text-secondary", "text-muted", "text-accent"];
          return (
            <div
              key={i}
              className={`absolute ${colors[i % 4]} text-2xl animate-float`}
              style={{
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            >
              ♥
            </div>
          );
        })}
      </div>
    </main>
  );
}