import { motion } from "framer-motion";
import { FileDown, Mail, Phone, MapPin, Github, Linkedin, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function CV() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/Elsayed_kouta_portfolio/">
            <Button variant="ghost" size="sm" className="gap-2 rounded-full text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </a>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>
            <a href="https://drive.google.com/file/d/1F_SWAux9zO4MafHXlaQiyIElPE8SfwjM/view?usp=drive_link" target="_blank" rel="noreferrer">
              <Button size="sm" className="gap-2 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <FileDown className="h-4 w-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-8">

          {/* Header */}
          <motion.div variants={fadeIn} className="relative rounded-3xl overflow-hidden bg-card border border-border/50 p-8 md:p-10 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center text-white font-extrabold text-4xl shadow-lg shadow-primary/30 shrink-0">
                  E
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-1">Elsayed Kouta</h1>
                  <p className="text-primary font-semibold text-lg mb-4">Flutter Developer</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <a href="mailto:koutaelsayed@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Mail className="h-3.5 w-3.5" /> koutaelsayed@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/elsayed-kouta-7183b8336/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Linkedin className="h-3.5 w-3.5" /> linkedin.com/in/elsayed-kouta-7183b8336
                    </a>
                    <a href="https://github.com/sayedkouta442" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Github className="h-3.5 w-3.5" /> github.com/sayedkouta442
                    </a>
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5" /> +20 1010220187
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> Tanta, Egypt · Open to Cairo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.section variants={fadeIn} className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 shadow-lg">
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="text-muted-foreground leading-relaxed">
              Flutter developer with experience building and publishing mobile applications on Google Play. Skilled in clean
              architecture, MVVM, Bloc/Cubit state management, and integrating REST APIs, Supabase, and Firebase.
              Experienced in offline-first apps, real-time features, geolocation, payment integration, and performance
              optimization. Focused on delivering scalable, maintainable, and user-friendly mobile solutions.
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section variants={fadeIn} className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 shadow-lg">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-8">
              <ExperienceItem
                title="Flutter Developer"
                company="Self-Employed"
                period="2024 – Present"
                bullets={[
                  "Released 2 apps on Google Play using Clean Architecture & MVVM.",
                  "Integrated Supabase for authentication, realtime database, storage, and REST APIs.",
                  "Implemented push notifications and offline-first features with Drift & Hive.",
                  "Applied Cubit state management and optimized API handling for smooth, maintainable performance.",
                ]}
              />
              <ExperienceItem
                title="Flutter Developer"
                company="ACS"
                period="Short-term, Aug 2025"
                bullets={[
                  "Developed an e-commerce tools rental app using MVVM architecture and Cubit state management.",
                  "Integrated REST APIs and built a fully responsive UI for a smooth user experience.",
                ]}
              />
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section variants={fadeIn} className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 shadow-lg">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <SkillRow label="Frameworks & Languages" value="Flutter, Dart, C++, Java" />
              <SkillRow label="Backend & Databases" value="Firebase, Supabase, RESTful APIs, Hive, Shared Preferences, sqflite" />
              <SkillRow label="Core Concepts" value="OOP, SOLID Principles, Design Patterns, SQL, Data Structures & Algorithms" />
              <SkillRow label="Architecture & State" value="Clean Architecture, MVVM, Bloc, Cubit" />
              <SkillRow label="Networking" value="Dio, HTTP, Retrofit" />
              <SkillRow label="Version Control & DevOps" value="Git, GitHub, CI/CD (GitHub Actions), Flutter Flavors" />
              <SkillRow label="Deployment & Publishing" value="Google Play Store deployment, release management" />
              <SkillRow label="Soft Skills" value="Problem Solving, Team Collaboration, Time Management" />
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={fadeIn} className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 shadow-lg">
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-6">
              <CVProject
                title="PageX – Community Book Exchange App"
                tags={["Flutter", "Supabase", "MVVM", "FCM"]}
                links={[{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=io.bookchange.app" }]}
                description="A mobile app for exchanging, selling, and sharing books. Built with MVVM architecture and Cubit state management, integrating Supabase for authentication, realtime chat, and storage, with Firebase push notifications, light/dark themes and optimized performance for scalability."
              />
              <CVProject
                title="Marrah wa Tallam (Educational)"
                tags={["Flutter", "Dart", "Text-to-Speech", "Gamification"]}
                links={[{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.sayedkouta.marrahwatallam" }]}
                description="Offline-first educational mobile application built using Flutter and Dart. Implemented text-to-speech functionality for interactive learning and designed gamified activities to enhance engagement."
              />
              <CVProject
                title="Agency-Based Car Rental App"
                tags={["Flutter", "Supabase", "Cubit", "Stripe", "Maps"]}
                links={[
                  { label: "GitHub", href: "https://github.com/sayedkouta442/car_rental" },
                  { label: "Demo", href: "https://www.linkedin.com/posts/elsayed-kouta-7183b8336_flutter-supabase-hive-activity-7350661315532619778-nTH_" },
                ]}
                description="Built a Flutter car rental app with Supabase, featuring filtered car search, map-based agency browsing, bookings with Stripe payments, favorites, light/dark mode, and geolocation. Implemented Clean Architecture, Cubit state management, and Hive for local caching."
              />
              <CVProject
                title="Location & Face ID Based Attendance App"
                tags={["Flutter", "ML Kit", "OpenStreetMap", "Clean Arch"]}
                links={[
                  { label: "GitHub", href: "https://github.com/sayedkouta442/attendance_appp" },
                  { label: "Demo", href: "https://www.linkedin.com/posts/elsayed-kouta-7183b8336_hrtech-workforcemanagement-futureofwork-activity-7357692772495097857-aAra" },
                ]}
                description="Built a Flutter app with Supabase for secure attendance tracking, incorporating time validation, geolocation (OpenStreetMap), face recognition (Google ML Kit) with landmarks, leave requests, and attendance history."
              />
              <CVProject
                title="Movies Discovery – TMDb Integration"
                tags={["Flutter", "Cubit", "Clean Arch", "Hive", "TMDB API"]}
                links={[
                  { label: "GitHub", href: "https://github.com/sayedkouta442/movie_app" },
                  { label: "Demo", href: "https://www.linkedin.com/posts/elsayed-kouta-7183b8336_proud-to-share-a-project-ive-been-working-activity-7328858273585991680-22Jn" },
                ]}
                description="Flutter app built with Clean Architecture and Cubit, using repository pattern, pagination, and Hive caching. Includes authentication, categorized browsing, and persistent favorites/watchlist."
              />
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={fadeIn} className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 shadow-lg">
            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground">Tanta University · Tanta, Egypt</p>
              </div>
              <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full shrink-0">
                September 2021 – June 2025
              </span>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div variants={fadeIn} className="text-center pb-8">
            <p className="text-muted-foreground mb-4">Want to work together?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/201010220187" target="_blank" rel="noreferrer">
                <Button className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 shadow-lg shadow-green-500/20">
                  WhatsApp Me
                </Button>
              </a>
              <a href="mailto:koutaelsayed@gmail.com">
                <Button variant="outline" className="rounded-full gap-2">
                  <Mail className="h-4 w-4" /> Email Me
                </Button>
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold font-display text-foreground mb-5 pb-3 border-b border-border/50 flex items-center gap-2">
      <span className="w-1 h-5 bg-primary rounded-full inline-block" />
      {children}
    </h2>
  );
}

function ExperienceItem({
  title, company, period, bullets,
}: {
  title: string; company: string; period: string; bullets: string[];
}) {
  return (
    <div className="relative pl-5 border-l-2 border-primary/30">
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
        <div>
          <span className="font-bold text-foreground">{company}</span>
          <span className="text-muted-foreground"> · {title}</span>
        </div>
        <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full shrink-0">{period}</span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary mt-1 shrink-0">›</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-sm font-semibold text-foreground">{label}: </span>
      <span className="text-sm text-muted-foreground">{value}</span>
    </div>
  );
}

function CVProject({
  title, tags, links, description,
}: {
  title: string; tags: string[]; links: { label: string; href: string }[]; description: string;
}) {
  return (
    <div className="relative pl-5 border-l-2 border-border/50 hover:border-primary/50 transition-colors">
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary/50" />
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2 mb-2">
        <h3 className="font-bold text-foreground">{title}</h3>
        <div className="flex gap-2 flex-wrap">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium">
              <ExternalLink className="h-3 w-3" /> {l.label}
            </a>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}
