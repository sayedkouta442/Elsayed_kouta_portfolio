import { motion } from "framer-motion";
import { Github, ExternalLink, Smartphone } from "lucide-react";
import { SiGoogleplay, SiLinkedin } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isPlayStore = project.demoUrl?.includes("play.google.com");
  const isLinkedin = project.demoUrl?.includes("linkedin.com");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-lg shadow-black/20"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary/30">
            <Smartphone className="h-12 w-12 text-muted-foreground/20" />
          </div>
        )}
        
        {/* Overlay with Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.repoUrl && (
            <div className="flex flex-col items-center gap-1">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110 hover:bg-primary hover:text-white"
                title="View Source on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <span className="text-[10px] text-white font-medium">Source</span>
            </div>
          )}
          {project.demoUrl && (
            <div className="flex flex-col items-center gap-1">
              <a
                href={project.demoUrl === "#coming-soon" ? undefined : project.demoUrl}
                target={project.demoUrl === "#coming-soon" ? undefined : "_blank"}
                rel={project.demoUrl === "#coming-soon" ? undefined : "noopener noreferrer"}
                className={`rounded-full bg-white p-3 text-black transition-transform hover:scale-110 hover:bg-primary hover:text-white ${project.demoUrl === "#coming-soon" ? "opacity-50 cursor-not-allowed" : ""}`}
                title={isPlayStore ? "View on Play Store" : isLinkedin ? "View Demo on LinkedIn" : "View Demo"}
                onClick={(e) => project.demoUrl === "#coming-soon" && e.preventDefault()}
              >
                {isPlayStore ? (
                  <SiGoogleplay className="h-5 w-5" />
                ) : isLinkedin ? (
                  <SiLinkedin className="h-5 w-5" />
                ) : (
                  <ExternalLink className="h-5 w-5" />
                )}
              </a>
              <span className="text-[10px] text-white font-medium">
                {isPlayStore ? "Play Store" : isLinkedin ? "Demo" : "Demo"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold font-display text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags?.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
