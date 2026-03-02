import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { education, experience } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Briefcase } from "lucide-react";

const TimelineItem = ({
  title,
  subtitle,
  period,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon: typeof GraduationCap;
  index: number;
}) => (
  <motion.div variants={fadeUp} custom={index * 0.15} className="relative pl-10 pb-10 last:pb-0">
    {/* Line */}
    <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
    {/* Dot */}
    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-primary/30">
      <Icon size={14} className="text-primary" />
    </div>
    <div className="glass rounded-xl p-5">
      <span className="text-xs text-primary font-medium tracking-wide">{period}</span>
      <h3 className="text-base font-heading font-semibold text-foreground mt-1">{title}</h3>
      <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const EducationSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef}>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">Background</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            Education & <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" /> Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem
                key={item.degree}
                title={item.degree}
                subtitle={item.institution}
                period={item.year}
                description={item.description}
                icon={GraduationCap}
                index={i}
              />
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-primary" /> Experience
            </h3>
            {experience.map((item, i) => (
              <TimelineItem
                key={item.role}
                title={item.role}
                subtitle={item.company}
                period={item.period}
                description={item.description}
                icon={Briefcase}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
