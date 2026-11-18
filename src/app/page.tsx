"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, HardHat, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { asset, company, credentials, gallery, pillars, projects, safety, services, stats, steps } from "@/lib/site";

const nav = [
  { href: "#about", l: "About" },
  { href: "#services", l: "Services" },
  { href: "#process", l: "Process" },
  { href: "#projects", l: "Track record" },
  { href: "#gallery", l: "Gallery" },
  { href: "#standards", l: "Standards" },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${dark ? "text-gold" : "text-gold-deep"}`}>
      <svg width="26" height="12" viewBox="0 0 26 12" aria-hidden><path d="M1 11 L9 2 L13 6 M13 11 L19 4 L25 11" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
      {children}
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-gold">
        <div className="absolute right-0 top-0 hidden bg-char px-5 py-1.5 text-[12px] font-bold italic tracking-[0.18em] text-white sm:block">RC: 7079138</div>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between pl-[150px] pr-5 sm:pl-[190px] lg:px-8 lg:pl-[230px]">
          <a href="#top" aria-label={`${company.name} — home`} className="hang absolute left-4 top-0 z-10 block bg-char sm:left-8 lg:left-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <img src={asset("/logo-full.png")} alt={company.name} className="h-[100px] w-auto sm:h-[116px]" width={782} height={704} />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-7 pt-5 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[13px] font-medium text-char/80 transition hover:text-char">{n.l}</a>
            ))}
            <a href="#contact" className="bg-char px-5 py-2.5 text-[13px] font-semibold text-gold transition hover:bg-char-2">Start a project</a>
          </nav>
          <button className="ml-auto pt-4 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="absolute inset-x-0 top-[76px] bg-char px-6 pb-6 pt-24 lg:hidden">
          {nav.concat([{ href: "#contact", l: "Contact" }]).map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3.5 font-display text-2xl text-white">{n.l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-36 sm:pt-40">
      <div className="roof-bg-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Eyebrow>Real estate development · Kaduna, Nigeria</Eyebrow>
            <h1 className="text-[clamp(2.7rem,7vw,5.6rem)] font-medium leading-[0.98] text-char">
              Building <em className="font-normal text-gold-deep">today.</em><br />Securing <em className="font-normal text-gold-deep">tomorrow.</em>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-stone">
              Prime Living Estate Limited designs, builds and manages homes, commercial spaces and public buildings — with a main-board director on every project and over 80% of our work coming from clients who come back.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-char px-7 py-4 text-sm font-semibold text-gold transition hover:bg-char-2">
                Discuss your project <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-3 border border-char/25 px-7 py-4 text-sm font-semibold transition hover:border-char hover:bg-white">
                See our track record
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div className="relative lg:col-span-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
          <div className="absolute -left-4 top-6 h-full w-full gable bg-gold" aria-hidden />
          <div className="gable relative bg-char">
            <img src={asset("/images/hero-house.jpg")} alt="Contemporary two-storey home with glass balustrade, stone feature wall and landscaped frontage" className="aspect-[1/1] w-full object-cover object-[35%_60%]" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 bg-char px-6 py-5 text-white shadow-2xl sm:left-auto sm:right-[-12px] sm:w-[22rem]">
            <p className="font-display text-2xl text-gold">If you can dream it,</p>
            <p className="font-display text-2xl">we can build it.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="At a glance" className="bg-char text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.v} delay={i * 0.07} className="border-l border-gold/40 pl-5 pr-3">
            <p className="font-display text-4xl text-gold sm:text-5xl">{s.v}</p>
            <p className="mt-2 text-[13px] leading-snug text-white/70">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">A company with regional scope and national ambition.</h2>
          <div className="mt-8 flex items-center gap-4 border-t border-char/15 pt-6 text-sm text-stone">
            <img src={asset("/logo-emblem.png")} alt="" className="h-9 w-auto rounded-sm bg-char p-1.5" width={822} height={345} />
            <span>Incorporated {company.incorporated} · {company.rc}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-stone lg:col-span-7">
          <p>We have shown that if you can dream it, we can build it. Our clients span private and government sectors, and more than 80% of our business comes from repeat clients — the surest sign of a job done properly.</p>
          <p>We consider building a truly collaborative process. When you bring us a project vision, we tailor our capabilities to your specific needs. As a full-service construction company, there is very little we cannot build when we work together.</p>
          <p className="border-l-2 border-gold pl-5 font-display text-2xl leading-snug text-char">“Our success is measured one project at a time — and after each one there must remain a satisfied client.”</p>
        </Reveal>
      </div>
      <div className="mt-20 grid gap-px bg-char/15 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08} className="bg-ivory p-8 sm:p-10">
            <span className="font-display text-5xl text-gold-deep/70">{p.n}</span>
            <h3 className="mt-5 text-2xl font-medium leading-tight">{p.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">{p.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const [a, setA] = useState(0);
  const s = services[a];
  return (
    <section id="services" className="roof-bg relative bg-char py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>What we build</Eyebrow>
          <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">Every sector, one standard of work.</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div role="tablist" aria-label="Services" className="lg:col-span-5">
            {services.map((x, i) => (
              <button key={x.id} role="tab" aria-selected={a === i} aria-controls="service-panel" onClick={() => setA(i)}
                className={`group flex w-full items-center justify-between border-b border-white/15 py-5 text-left transition ${a === i ? "text-gold" : "text-white/70 hover:text-white"}`}>
                <span className="flex items-baseline gap-5">
                  <span className="text-xs font-semibold tabular-nums opacity-60">0{i + 1}</span>
                  <span className="font-display text-2xl sm:text-[28px]">{x.t}</span>
                </span>
                <ArrowUpRight size={20} className={`shrink-0 transition ${a === i ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`} />
              </button>
            ))}
          </div>
          <div id="service-panel" role="tabpanel" className="lg:col-span-7">
            <motion.div key={s.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="h-full border border-gold/30 bg-char-2 p-8 sm:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">{s.tag}</p>
              <h3 className="mt-3 text-3xl font-medium sm:text-4xl">{s.t}</h3>
              <p className="mt-5 text-base leading-relaxed text-white/75">{s.d}</p>
              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {s.pts.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-white/90"><Check size={18} className="mt-0.5 shrink-0 text-gold" />{p}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="max-w-2xl">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">From first sketch to the keys in your hand.</h2>
      </Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.09} className="relative" >
            <svg viewBox="0 0 160 50" className="mb-5 h-12 w-36 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
              {Array.from({ length: i + 1 }).map((_, k) => <path key={k} d={`M${6 + k * 26} 46 L${34 + k * 26} 14 L${62 + k * 26} 46`} opacity={1 - k * 0.2} />)}
            </svg>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone">Step 0{i + 1}</p>
            <h3 className="mt-2 text-2xl font-medium">{s.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">{s.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Track record</Eyebrow>
            <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">Contracts won, and certified complete.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone">Award letters and completion certificates from the Universal Basic Education Boards are included in our company profile.</p>
        </Reveal>
        <div className="mt-14 border-t border-char">
          {projects.map((p, i) => (
            <Reveal key={p.ref} delay={i * 0.06}>
              <article className="grid gap-5 border-b border-char/20 py-9 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-2">
                  <p className="font-display text-3xl text-gold-deep">{p.date}</p>
                  <span className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${p.status === "Completed" ? "bg-char text-gold" : "border border-char text-char"}`}>
                    {p.status === "Completed" && <BadgeCheck size={13} />}{p.status}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-medium leading-snug sm:text-[28px]">{p.title}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-stone"><MapPin size={15} className="mt-0.5 shrink-0" />{p.where}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-stone">{p.note}</p>
                  <p className="mt-3 text-xs text-stone/80">{p.client} · Ref {p.ref}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone">Contract sum</p>
                  <p className="font-display text-5xl">{p.value}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="max-w-2xl">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">Structures, sites and finished spaces.</h2>
      </Reveal>
      <div className="mt-14 grid auto-rows-[200px] gap-3 sm:auto-rows-[240px] md:grid-cols-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} delay={(i % 4) * 0.06} className={`group relative overflow-hidden bg-char ${g.cls}`}>
            <img src={asset(g.src)} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-[13px] font-medium text-white">{g.cap}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section id="standards" className="bg-char py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <Eyebrow dark>Health, safety & environment</Eyebrow>
          <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">Every worker goes home safely, every night.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">People are our greatest resource and most valuable asset. We are committed to preventing accidents, protecting the environment and client property, and conducting business ethically.</p>
          <ul className="mt-9 space-y-5">
            {safety.map((s) => (
              <li key={s.t} className="flex gap-4">
                <HardHat size={20} className="mt-1 shrink-0 text-gold" />
                <p className="text-[15px] leading-relaxed text-white/75"><strong className="font-semibold text-white">{s.t}.</strong> {s.d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow dark>Credentials</Eyebrow>
          <h3 className="text-3xl font-medium leading-tight sm:text-4xl">Registered, compliant and verifiable.</h3>
          <div className="mt-9 grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-3">
            {credentials.map((c) => (
              <div key={c.k} className="bg-char p-5">
                <p className="font-display text-3xl text-gold">{c.k}</p>
                <p className="mt-1 text-sm font-medium">{c.t}</p>
                <p className="mt-0.5 text-xs text-white/55">{c.d}</p>
              </div>
            ))}
            <div className="flex items-center bg-gold p-5 text-char"><p className="text-sm font-semibold leading-snug">Certificates available on request.</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState<{ mailto: string; gmail: string } | null>(null);
  const [f, setF] = useState({ name: "", phone: "", email: "", type: services[0].t, message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nProject type: ${f.type}\n\n${f.message}`;
    const q = `subject=${encodeURIComponent(`Project enquiry — ${f.type}`)}&body=${encodeURIComponent(body)}`;
    const mailto = `mailto:${company.email}?${q}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(company.email)}&${q}`;
    setSent({ mailto, gmail });
    window.location.href = mailto;
  }

  const field = "w-full border border-char/25 bg-white px-4 py-3.5 text-[15px] outline-none transition focus:border-char";
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-4xl font-medium leading-[1.05] sm:text-5xl">Let’s talk about what you want to build.</h2>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-char"><MapPin size={19} /></span>
              <a href={company.map} target="_blank" rel="noreferrer" className="self-center text-[15px] leading-relaxed hover:underline">{company.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</a></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-char"><Phone size={19} /></span>
              <span className="self-center text-[15px]">{company.phones.map((p, i) => <span key={p.tel}>{i > 0 && " · "}<a href={`tel:${p.tel}`} className="font-medium hover:underline">{p.display}</a></span>)}</span></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-char"><Mail size={19} /></span>
              <a href={`mailto:${company.email}`} className="self-center break-all text-[15px] font-medium hover:underline">{company.email}</a></li>
          </ul>
          <p className="mt-10 text-sm text-stone">Visit us at our Kaduna office, or send a brief and we will come back to you.</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={submit} className="grid gap-4 border border-char/15 bg-cream p-6 sm:grid-cols-2 sm:p-10">
            <label className="text-sm font-medium">Full name<input required value={f.name} onChange={set("name")} className={`${field} mt-2`} autoComplete="name" /></label>
            <label className="text-sm font-medium">Phone<input value={f.phone} onChange={set("phone")} className={`${field} mt-2`} autoComplete="tel" inputMode="tel" /></label>
            <label className="text-sm font-medium">Email<input type="email" required value={f.email} onChange={set("email")} className={`${field} mt-2`} autoComplete="email" /></label>
            <label className="text-sm font-medium">Project type
              <select value={f.type} onChange={set("type")} className={`${field} mt-2`}>{services.map((s) => <option key={s.id}>{s.t}</option>)}</select></label>
            <label className="text-sm font-medium sm:col-span-2">Tell us about your project<textarea required rows={5} value={f.message} onChange={set("message")} className={`${field} mt-2 resize-y`} placeholder="Location, scope, timeline and budget range, if known." /></label>
            <div className="sm:col-span-2">
              <button className="inline-flex items-center gap-3 bg-char px-8 py-4 text-sm font-semibold text-gold transition hover:bg-char-2">Send enquiry <ArrowRight size={17} /></button>
              {sent && (
                <p role="status" className="mt-4 text-sm text-stone">Your email app should open with the message ready to send. If it did not, <a href={sent.mailto} className="font-semibold text-char underline">try again</a> or <a href={sent.gmail} target="_blank" rel="noreferrer" className="font-semibold text-char underline">open it in Gmail</a>.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gold text-char">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <img src={asset("/logo-full.png")} alt={company.name} className="h-24 w-auto" width={782} height={704} />
          <div className="text-sm leading-relaxed"><p className="font-semibold">{company.name}</p><p>{company.rc}</p><p className="italic">{company.tagline}</p></div>
        </div>
        <div className="text-sm leading-relaxed md:text-right">
          {company.addressLines.map((l) => <p key={l}>{l}</p>)}
          <p className="mt-2 font-medium">{company.phones[0].display} · {company.email}</p>
        </div>
      </div>
      <div className="bg-char py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Projects />
        <Gallery />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
