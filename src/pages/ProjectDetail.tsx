import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/animations/variants";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} custom={0}>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={18} /> Back to Portfolio
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.1} className="rounded-xl overflow-hidden mb-8 glow-border border">
            <img src={project.image} alt={project.name} className="w-full aspect-video object-cover" />
          </motion.div>

          <motion.h1 variants={fadeUp} custom={0.15} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {project.name}
          </motion.h1>

          <motion.div variants={fadeUp} custom={0.2} className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={0.25} className="flex gap-4 mb-10">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-box">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm hover:border-primary/50 transition-colors">
              <Github size={16} /> Source Code
            </a>
          </motion.div>

          {[
            { title: "Description", content: project.description },
            { title: "Challenges", content: project.challenges },
            { title: "Future Plans", content: project.futurePlans },
          ].map((section, i) => (
            <motion.div key={section.title} variants={fadeUp} custom={0.3 + i * 0.1} className="glass rounded-xl p-6 mb-6">
              <h3 className="text-lg font-heading font-semibold text-primary mb-3">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
