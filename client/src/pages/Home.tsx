import { useProjects } from "@/hooks/use-projects";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Layers, Smartphone, FileDown, Database, Shield, Zap } from "lucide-react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block rounded-full bg-secondary/50 border border-border/50 px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="text-base font-semibold text-primary">Elsayed Kouta | Flutter Developer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-display tracking-tighter mb-6 leading-[0.9]">
              Building beautiful <br />
              <span className="text-gradient">cross-platform apps</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Mobile developer with hands-on experience building mobile applications using Dart and Flutter. 
              Built more than 6 production-ready apps with multiple applications published on stores. 
              Experienced in delivering high-quality features through real-world freelance projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-full text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <div className="flex gap-4">
                <a href="https://github.com/sayedkouta442" target="_blank" rel="noreferrer">
                  <Button size="icon" variant="outline" className="h-14 w-14 rounded-full border-border hover:bg-secondary/50">
                    <SiGithub className="h-6 w-6" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/elsayed-kouta-7183b8336/" target="_blank" rel="noreferrer">
                  <Button size="icon" variant="outline" className="h-14 w-14 rounded-full border-border hover:bg-secondary/50">
                    <SiLinkedin className="h-6 w-6" />
                  </Button>
                </a>
                <a href="https://wa.me/201010220187" target="_blank" rel="noreferrer">
                  <Button size="icon" variant="outline" className="h-14 w-14 rounded-full border-border hover:bg-secondary/50">
                    <SiWhatsapp className="h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Tech Stack / About Preview */}
      <section className="py-20 bg-secondary/20 border-y border-border/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Smartphone, label: "Mobile Apps", desc: "iOS & Android" },
              { icon: Code2, label: "Clean Code", desc: "Scalable Architecture" },
              { icon: Layers, label: "UI/UX Design", desc: "Pixel Perfect" },
              { icon: Shield, label: "Store Deployment", desc: "Play Store & App Store" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="h-16 w-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary shadow-lg">
                  <item.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">
                A selection of my best work in mobile and web development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading Skeletons
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <Skeleton className="w-full aspect-[4/3] rounded-2xl" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))
            ) : projects?.length === 0 ? (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                <p>No projects added yet. Seed the database to see content.</p>
              </div>
            ) : (
              projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image/Visual Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
                {/* Descriptive comment for Unsplash URL */}
                {/* coding setup minimalist workspace dark mode */}
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                  alt="Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Behind the <span className="text-primary">Code</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I'm Elsayed Kouta, a Flutter developer with hands-on experience building mobile applications using Dart and Flutter. 
                  I am skilled in API integration, state management, and creating clean, user-friendly interfaces.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        Frameworks & UI
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Flutter, Dart, C++, Java. Specialized in Responsive UI and Adaptive Layouts for all screen sizes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        Architecture
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Clean Architecture, MVVM, Bloc, Cubit for scalable and professional codebases.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Features & APIs
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Real-time Chats, Push Notifications, Google Maps, Location Services, RESTful APIs, Dio, Retrofit.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" />
                        Backend & Storage
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Firebase, Supabase, Hive, Shared Preferences, Sqflite.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Tools & Concepts
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Git, GitHub, CI/CD (GitHub Actions), Flutter Flavors, OOP, SOLID Principles, Design Patterns.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        Deployment
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Expertise in Google Play Store deployment and release management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="https://drive.google.com/file/d/1F_SWAux9zO4MafHXlaQiyIElPE8SfwjM/view?usp=drive_link" target="_blank" rel="noreferrer">
                  <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-semibold gap-2">
                    <FileDown className="h-5 w-5" />
                    Download CV
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto rounded-3xl bg-card border border-border p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-display">Let's work together</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Available for new projects. Reach out via WhatsApp or Email for collaborations and inquiries.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <a href="https://wa.me/201010220187" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-16 px-10 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-3 shadow-lg shadow-green-500/20 text-lg">
                    <SiWhatsapp className="h-6 w-6" />
                    WhatsApp
                  </Button>
                </a>
                <a href="mailto:koutaelsayed@gmail.com" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-16 px-10 rounded-full border-border hover:bg-secondary/50 gap-3 text-lg">
                    <Code2 className="h-6 w-6" />
                    Email Me
                  </Button>
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-sm text-foreground/80 pt-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
