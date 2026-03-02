import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground font-medium">Jasia hasan</span>. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[
            { icon: Github, href: 'https://github.com/jsyaii' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/jasia-hasan-895292244?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
            { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61577739368745' },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
