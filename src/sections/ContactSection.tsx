import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const titleRef = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - integrate with backend
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef}>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </motion.p>

            {[
              { icon: Mail, label: "Email", value: "jasiahasan170@gmail.com", href: "mailto:jasiahasan170@gmail.com" },
              { icon: Phone, label: "Phone", value: "+880 1763717291", href: "tel:+88017663717291" },
              { icon: MessageCircle, label: "WhatsApp", value: "+880 1763717291", href: "https://wa.me/8801702445566" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                variants={fadeUp}
                custom={(i + 1) * 0.1}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { name: "name" as const, label: "Your Name", type: "text" },
              { name: "email" as const, label: "Your Email", type: "email" },
            ].map((field, i) => (
              <motion.div key={field.name} variants={fadeUp} custom={i * 0.1}>
                <label className="block text-sm text-muted-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                  placeholder={field.label}
                />
              </motion.div>
            ))}
            <motion.div variants={fadeUp} custom={0.2}>
              <label className="block text-sm text-muted-foreground mb-1.5">Your Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                placeholder="Write your message..."
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.3}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-box w-full justify-center"
              >
                <Send size={18} />
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
