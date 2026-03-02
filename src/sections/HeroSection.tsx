import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Download, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { socialLinks } from "@/data/portfolio";

import photo from "@/assets/photo.jpeg";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const orbs = bgRef.current.querySelectorAll(".orb");
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        duration: 6 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    const lenis = (window as any).__lenis;
    if (el && lenis) lenis.scrollTo(el, { offset: -80 });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[120px]" />
        <div className="orb absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[150px]" />
        <div className="orb absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-glow-muted/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium text-sm md:text-base tracking-widest uppercase mb-4">
              Hello, I'm
            </motion.p>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4">
              <span className="text-foreground">Jasia </span>
              <span className="gradient-text glow-text">Hasan</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Full Stack Developer crafting modern, performant, and beautiful web experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} custom={0.3} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-box"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors"
              >
                Learn More
                <ArrowDown size={18} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} custom={0.4} className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/jsyaii", label: "GitHub" },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/jasia-hasan-895292244?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://www.linkedin.com/in/jasia-hasan-895292244?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://www.linkedin.com/in/jasia-hasan-895292244?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: "LinkedIn" },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61577739368745', label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div variants={fadeUp} custom={0.3} className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border border-2">
              <img src={photo} alt="Developer" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
