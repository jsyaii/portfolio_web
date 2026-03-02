import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef}>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} custom={0} className="glass rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I started my programming journey during college, fascinated by how a few lines of code could create
              something meaningful. What began with simple HTML pages quickly evolved into a passion for building
              full-stack web applications. Over the years, I've honed my skills in React, TypeScript, Node.js, and
              modern web technologies, always staying curious about the latest trends in the ecosystem.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.1} className="glass rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">What I Love</h3>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on building interactive, performant user interfaces that delight users. I enjoy the
              intersection of design and engineering — turning creative visions into pixel-perfect, accessible
              experiences. I'm particularly passionate about animation, component architecture, and developer
              tooling.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.2} className="glass rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Beyond Code</h3>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me playing basketball, exploring digital art and illustration,
              or diving into science fiction novels. I believe creativity outside of work fuels better problem-solving
              and innovative thinking inside it.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
