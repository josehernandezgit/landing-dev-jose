"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiServer,
} from "react-icons/fi";

type Locale = "es" | "en";
type MotionRevealProps = Pick<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
>;

const profile = {
  name: "Jose Rafael Hernandez Tinschmidt",
  role: "Fullstack Developer",
  location: "Santiago, Chile",
  email: "joss3k@gmail.com",
  phone: "+56 9 4660 6196",
  github: "josehernandezgit",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-rafael-hern%C3%A1ndez-tinschmidt-2b680868/",
  cvPath: "/Jose-Rafael-Hernandez-CV.pdf",
};

const localeLabels = {
  es: {
    lang: "ES",
    langAlt: "EN",
    badge: "Fullstack Engineer | React | Next.js | APIs | SQL | Supabase",
    introCmd: "$ whoami",
    titleA: "Construyo productos web",
    titleB: "con interfaz potente y backend confiable.",
    summary:
      "Ingeniero de sistemas con experiencia desde 2019 creando y manteniendo soluciones web y mobile en entornos productivos, combinando frontend, backend, datos e integraciones.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Ir a contacto",
    ctaDownload: "Descargar CV",
    terminalStatus: "Disponible para nuevos desafios",
    terminalStyle: "Producto, performance y mantenibilidad",
    terminalFocus: "Frontend premium + backend solido",
    skillTitle: "Stack principal",
    timelineCmd: "$ cat experience.log",
    timelineTitle: "Experiencia real en plataformas productivas y equipos cross-functional.",
    timelineText:
      "Tu perfil mezcla entrega de features, mantenimiento de sistemas criticos, optimizacion de APIs y soporte a operaciones. Eso conviene mostrarlo con claridad.",
    projectsCmd: "$ ls selected-work",
    projectsTitle: "Proyectos y presencia publica",
    contactCmd: "$ open channels",
    contactTitle: "Contacto directo",
    contactText:
      "Completé los datos visibles del CV y dejé la landing lista en espanol e ingles para usarla como presentacion profesional.",
    sections: {
      skills: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind", "Component integration"],
        },
        {
          title: "Backend",
          items: [".NET", "ASP.NET MVC", "REST APIs", "Service integration", "Supabase"],
        },
        {
          title: "Data & Delivery",
          items: ["SQL Server", "Oracle PL/SQL", "MySQL", "Gitflow", "Atlassian Suite"],
        },
      ],
      timeline: [
        {
          period: "Jun 2023 - Actualidad",
          title: "Finix Group | Software Developer / Fullstack Developer",
          text: "Desarrollo de nuevas funcionalidades para Halley, estabilidad operativa, optimizacion de SQL y APIs, y documentacion tecnica para continuidad del equipo.",
        },
        {
          period: "Jun 2019 - Jun 2023",
          title: "AFP Provida | Software Developer / Fullstack Developer",
          text: "Features para app mobile y sitio corporativo, integracion de widgets, releases coordinados y transferencia de conocimiento entre equipos.",
        },
        {
          period: "Ene 2019 - Mar 2019",
          title: "ACSIM + VMICA | Systems Developer",
          text: "Modelado relacional en SQL Server, stored procedures, validaciones backend, integracion ASP.NET y pruebas de servicios con SoapUI.",
        },
      ],
      projects: [
        {
          name: "Comeci Gift",
          href: "https://comerca-gift.vercel.app",
          description:
            "Gift shop online con catálogo dinámico, integración WhatsApp para pedidos y gestión de inventario en tiempo real.",
          stack: ["Next.js", "TypeScript", "Tailwind", "WhatsApp API"],
        },
        {
          name: "Sophies Petals",
          href: "https://sophies-petals.vercel.app",
          description:
            "Landing page para negocio de flores con catálogo de arreglos, precios y contacto directo por WhatsApp.",
          stack: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
          name: "OIS Cycles",
          href: "https://ois-cycles.vercel.app",
          description:
            "Plataforma de venta de bicicletas y accesorios con catálogo online, carrito y gestión de pedidos.",
          stack: ["Next.js", "TypeScript", "E-commerce"],
        },
        {
          name: "GitHub / josehernandezgit",
          href: "https://github.com/josehernandezgit",
          description:
            "Perfil técnico para mostrar código, experimentación y piezas de portafolio público.",
          stack: ["GitHub", "Portafolio", "Código"],
        },
      ],
      contacts: [
        { label: "Email", value: "joss3k@gmail.com", href: "mailto:joss3k@gmail.com" },
        { label: "Telefono", value: "+56 9 4660 6196", href: "tel:+56946606196" },
        {
          label: "LinkedIn",
          value: "jose-rafael-hernandez-tinschmidt",
          href: "https://www.linkedin.com/in/jos%C3%A9-rafael-hern%C3%A1ndez-tinschmidt-2b680868/",
        },
        { label: "GitHub", value: "github.com/josehernandezgit", href: "https://github.com/josehernandezgit" },
        { label: "CV", value: "Descargar PDF", href: "/Jose-Rafael-Hernandez-CV.pdf" },
      ],
    },
  },
  en: {
    lang: "EN",
    langAlt: "ES",
    badge: "Fullstack Engineer | React | Next.js | APIs | SQL | Supabase",
    introCmd: "$ whoami",
    titleA: "I build web products",
    titleB: "with strong UI and reliable backend systems.",
    summary:
      "Systems engineer with experience since 2019 building and maintaining web and mobile solutions in production, combining frontend, backend, data, and integrations.",
    ctaPrimary: "View projects",
    ctaSecondary: "Jump to contact",
    ctaDownload: "Download CV",
    terminalStatus: "Available for new challenges",
    terminalStyle: "Product, performance and maintainability",
    terminalFocus: "Premium frontend + solid backend",
    skillTitle: "Core stack",
    timelineCmd: "$ cat experience.log",
    timelineTitle: "Hands-on experience in production platforms and cross-functional teams.",
    timelineText:
      "Your profile combines feature delivery, critical platform maintenance, API optimization, and operational support. That is worth presenting clearly.",
    projectsCmd: "$ ls selected-work",
    projectsTitle: "Projects and public presence",
    contactCmd: "$ open channels",
    contactTitle: "Direct contact",
    contactText:
      "I filled the visible data from your CV and left the landing ready in Spanish and English so you can use it as a professional presentation.",
    sections: {
      skills: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind", "Component integration"],
        },
        {
          title: "Backend",
          items: [".NET", "ASP.NET MVC", "REST APIs", "Service integration", "Supabase"],
        },
        {
          title: "Data & Delivery",
          items: ["SQL Server", "Oracle PL/SQL", "MySQL", "Gitflow", "Atlassian Suite"],
        },
      ],
      timeline: [
        {
          period: "Jun 2023 - Present",
          title: "Finix Group | Software Developer / Fullstack Developer",
          text: "Built new Halley features, supported operational stability, optimized SQL and API performance, and produced technical documentation for maintainability.",
        },
        {
          period: "Jun 2019 - Jun 2023",
          title: "AFP Provida | Software Developer / Fullstack Developer",
          text: "Worked on mobile app and corporate website features, widget integration, coordinated releases, and knowledge transfer across teams.",
        },
        {
          period: "Jan 2019 - Mar 2019",
          title: "ACSIM + VMICA | Systems Developer",
          text: "Worked on SQL Server relational modeling, stored procedures, backend validations, ASP.NET integration, and service testing with SoapUI.",
        },
      ],
      projects: [
        {
          name: "Comecial Gift",
          href: "https://comerca-gift.vercel.app",
          description:
            "Gift shop online con catálogo de regalos por categoría y contacto directo por WhatsApp.",
          stack: ["Next.js", "TypeScript", "Tailwind", "WhatsApp API"],
        },
        {
          name: "Sophies Petals",
          href: "https://sophies-petals.vercel.app",
          description:
            "Florería con arreglos florales,envíos y contacto directo por WhatsApp.",
          stack: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
          name: "OIS Cycles",
          href: "https://ois-cycles.vercel.app",
          description:
            "Venta de bicicletas y accesorios con catálogo online y pedidos por WhatsApp.",
          stack: ["Next.js", "TypeScript", "E-commerce"],
        },
        {
          name: "GitHub / josehernandezgit",
          href: "https://github.com/josehernandezgit",
          description:
            "Perfil técnico para mostrar código y piezas de portafolio.",
          stack: ["GitHub", "Portafolio", "Código"],
        },
      ],
      contacts: [
        { label: "Email", value: "joss3k@gmail.com", href: "mailto:joss3k@gmail.com" },
        { label: "Phone", value: "+56 9 4660 6196", href: "tel:+56946606196" },
        {
          label: "LinkedIn",
          value: "jose-rafael-hernandez-tinschmidt",
          href: "https://www.linkedin.com/in/jos%C3%A9-rafael-hern%C3%A1ndez-tinschmidt-2b680868/",
        },
        { label: "GitHub", value: "github.com/josehernandezgit", href: "https://github.com/josehernandezgit" },
        { label: "CV", value: "Download PDF", href: "/Jose-Rafael-Hernandez-CV.pdf" },
      ],
    },
  },
} satisfies Record<
  Locale,
  {
    lang: string;
    langAlt: string;
    badge: string;
    introCmd: string;
    titleA: string;
    titleB: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaDownload: string;
    terminalStatus: string;
    terminalStyle: string;
    terminalFocus: string;
    skillTitle: string;
    timelineCmd: string;
    timelineTitle: string;
    timelineText: string;
    projectsCmd: string;
    projectsTitle: string;
    contactCmd: string;
    contactTitle: string;
    contactText: string;
    sections: {
      skills: Array<{ title: string; items: string[] }>;
      timeline: Array<{ period: string; title: string; text: string }>;
      projects: Array<{ name: string; href: string; description: string; stack: string[] }>;
      contacts: Array<{ label: string; value: string; href: string }>;
    };
  }
>;

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  ".NET",
  "REST APIs",
  "SQL Server",
  "Oracle PL/SQL",
  "Supabase",
  "Gitflow",
  "Atlassian",
];

const particles = [
  { left: "6%", top: "18%", delay: "0s", duration: "10s" },
  { left: "15%", top: "72%", delay: "1.8s", duration: "12s" },
  { left: "28%", top: "34%", delay: "0.6s", duration: "11s" },
  { left: "44%", top: "14%", delay: "2.8s", duration: "14s" },
  { left: "53%", top: "66%", delay: "1.2s", duration: "13s" },
  { left: "67%", top: "26%", delay: "3.5s", duration: "9s" },
  { left: "79%", top: "74%", delay: "2.2s", duration: "12s" },
  { left: "88%", top: "38%", delay: "0.9s", duration: "10s" },
];

function fadeUp(shouldReduceMotion: boolean, delay = 0): MotionRevealProps {
  if (shouldReduceMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  };
}

function contactIcon(label: string) {
  switch (label.toLowerCase()) {
    case "email":
      return FiMail;
    case "telefono":
    case "phone":
      return FiPhone;
    case "github":
      return FiGithub;
    case "linkedin":
      return FiLinkedin;
    case "cv":
      return FiDownload;
    default:
      return FiMapPin;
  }
}

export function PortfolioLanding() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [locale, setLocale] = useState<Locale>("es");
  const copy = localeLabels[locale];

  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-orb left-[8%] top-20 h-32 w-32 bg-cyan-400/30" />
        <div className="glow-orb right-[10%] top-64 h-44 w-44 bg-teal-300/20 [animation-delay:1.2s]" />
        <div className="glow-orb bottom-24 left-1/3 h-56 w-56 bg-rose-400/10 [animation-delay:2s]" />
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="mb-6 flex justify-center sm:justify-end">
          <div className="terminal-shell inline-flex rounded-full p-1">
            {(["es", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`rounded-full px-4 py-2 font-mono text-xs tracking-[0.24em] transition-colors ${
                  locale === lang ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/8"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div {...fadeUp(shouldReduceMotion)} className="space-y-8">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-100/80 sm:text-xs sm:tracking-[0.34em]">
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,0.8)]" />
              <span className="min-w-0 text-balance">{copy.badge}</span>
            </div>

            <div className="space-y-5">
              <p className="font-mono text-sm text-cyan-100/65">{copy.introCmd}</p>
              <h1 className="max-w-4xl text-4xl leading-[0.95] font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
                {copy.titleA}
                <span className="text-gradient"> {copy.titleB}</span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300/88 sm:text-xl sm:leading-8">{copy.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-200/78">
              {techBadges.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#proyectos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                {copy.ctaPrimary}
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white/88 transition-colors hover:bg-white/10 sm:w-auto"
              >
                {copy.ctaSecondary}
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-6 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/14 sm:w-auto"
              >
                {copy.ctaDownload}
                <FiDownload />
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(shouldReduceMotion, 0.18)}
            className="tilt-card relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <div className="terminal-shell scanline relative rounded-[28px] p-5 sm:p-6">
              <div className="noise" />
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <p className="max-w-[62%] truncate text-right font-mono text-[10px] tracking-[0.22em] text-cyan-100/56 sm:text-xs sm:tracking-[0.28em]">
                  {profile.github}.portfolio.tsx
                </p>
              </div>

              <div className="space-y-4 font-mono text-sm leading-7 text-slate-200/90">
                <p>
                  <span className="text-cyan-300">const</span> profile =
                  <span className="text-teal-300"> {"{"}</span>
                </p>
                <p className="pl-4">
                  name: <span className="text-amber-200">&quot;{profile.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-amber-200">&quot;{profile.role}&quot;</span>,
                </p>
                <p className="pl-4">
                  focus: <span className="text-amber-200">&quot;{copy.terminalFocus}&quot;</span>,
                </p>
                <p className="pl-4">
                  location: <span className="text-amber-200">&quot;{profile.location}&quot;</span>,
                </p>
                <p className="pl-4">
                  github: <span className="text-amber-200">&quot;{profile.github}&quot;</span>,
                </p>
                <p>
                  <span className="text-teal-300">{"}"}</span>
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/14 bg-cyan-300/8 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-100/55">Status</p>
                  <p className="mt-2 text-lg font-semibold text-white">{copy.terminalStatus}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-100/55">Build Style</p>
                  <p className="mt-2 text-lg font-semibold text-white">{copy.terminalStyle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-8 lg:px-10">
        <motion.div {...fadeUp(shouldReduceMotion)} className="mb-2">
          <p className="font-mono text-sm text-cyan-100/55">$ stack --core</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{copy.skillTitle}</h2>
        </motion.div>

        <motion.div {...fadeUp(shouldReduceMotion, 0.08)} className="grid gap-5 md:grid-cols-3">
          {copy.sections.skills.map(({ title, items }, index) => {
            const Icon = index === 0 ? FiCode : index === 1 ? FiServer : FiGlobe;

            return (
              <article
                key={title}
                className="terminal-shell rounded-[24px] p-6"
                style={{
                  transform: shouldReduceMotion ? undefined : `translateY(${index % 2 === 0 ? "0px" : "18px"})`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/8 p-3 text-cyan-200">
                    <Icon size={22} />
                  </span>
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-2 font-mono text-xs text-slate-200/76">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div {...fadeUp(shouldReduceMotion)} className="space-y-5">
          <p className="font-mono text-sm text-cyan-100/55">{copy.timelineCmd}</p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            {copy.timelineTitle}
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-300/80">{copy.timelineText}</p>
        </motion.div>

        <motion.div {...fadeUp(shouldReduceMotion, 0.14)} className="space-y-4">
          {copy.sections.timeline.map((item) => (
            <article key={item.period} className="terminal-shell rounded-[22px] p-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 rounded-full border border-teal-300/20 bg-teal-300/10 p-3 text-teal-200">
                  <FiBriefcase size={18} />
                </span>
                <div className="space-y-1">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/50">{item.period}</p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-300/78">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      <section id="proyectos" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
        <motion.div {...fadeUp(shouldReduceMotion)} className="mb-8 space-y-3">
          <p className="font-mono text-sm text-cyan-100/55">{copy.projectsCmd}</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{copy.projectsTitle}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.sections.projects.map((project, index) => (
            <motion.a
              {...fadeUp(shouldReduceMotion, index * 0.08)}
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="terminal-shell group block rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <FiArrowUpRight className="text-cyan-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300/80">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-slate-200/74">
                    {item}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-7xl px-4 py-14 pb-20 sm:px-8 sm:py-16 lg:px-10">
        <motion.div {...fadeUp(shouldReduceMotion)} className="terminal-shell rounded-[30px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="font-mono text-sm text-cyan-100/55">{copy.contactCmd}</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{copy.contactTitle}</h2>
              <p className="max-w-lg text-base leading-8 text-slate-300/78">{copy.contactText}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {copy.sections.contacts.map(({ label, value, href }) => {
                const Icon = contactIcon(label);

                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-[22px] border border-white/10 bg-white/6 p-5 transition-colors duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-2xl border border-cyan-300/18 bg-cyan-300/8 p-3 text-cyan-200">
                        <Icon size={18} />
                      </span>
                      <FiArrowUpRight className="text-white/40" />
                    </div>
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/46">{label}</p>
                    <p className="mt-2 break-words text-base font-medium text-white">{value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
