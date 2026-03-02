import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { skills } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      {
        width: `${level}%`,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [level]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-primary to-glow-muted"
          style={{ width: 0 }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div ref={titleRef}>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div key={category} variants={fadeUp} custom={i * 0.1} className="glass rounded-xl p-6">
              <h3 className="text-lg font-heading font-semibold text-primary mb-6">{category}</h3>
              {items.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
