import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { projects } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div variants={fadeUp} custom={index * 0.15}>
    <div className="glass rounded-xl overflow-hidden group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef}>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">My Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
