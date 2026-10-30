import Link from "next/link";
import Image from "next/image";
import { ScrollCar } from "@/components/scroll-car";
import { HeroPortrait } from "@/components/hero-portrait";
import { ProjectVisual } from "@/components/project-visual";
import { ArtGallery } from "@/components/art-gallery";
import { Journal } from "@/components/journal";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({ description: site.seo.homeDescription, path: "/", type: "profile" });
export default function Home() {
  const projects = ["racecraft", "uxray", "fair-split"].flatMap(slug => site.projects.filter(project => project.slug === slug));
  return <>
    <ScrollCar />
    <section className="container-page studio-hero">
      <div className="hero-eyebrow"><span className="label">Builder. Creative. Motorsport mind.</span><span className="label location"><i /> Dhaka, Bangladesh</span></div>
      <div className="hero-grid personal-hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">The person behind the projects <span aria-hidden="true">↗</span></p>
          <h1 className="personal-name">Nafiz<br /><em>Shahriar</em><br /><span className="accent-word">Sami.</span></h1>
          <p className="hero-description">I build software, explore AI, and make art. A CSE student at BRAC University, with an eye for design and a mind that’s usually somewhere between a new idea and the next apex.</p>
          <div className="hero-actions"><Link className="pill-button" href="#work">Explore my work <span>↗</span></Link><Link className="text-link" href="#about">Get to know me <span>↗</span></Link></div>
        </div>
        <HeroPortrait />
      </div>
      <div className="hero-bottom"><span className="label">CSE @ BRAC University</span><span className="label">Ossharohi / Aerodynamics</span><a href="#work" className="label">Scroll to explore ↓</a></div>
    </section>
    <div className="discipline-strip"><span>Code with purpose</span><b>✳</b><span>Chase the next apex</span><b>✳</b><span>Create without limits</span><b>✳</b><span>Stay curious</span><b>✳</b></div>
    <section id="work" className="container-page studio-section"><div className="section-top"><div><p className="label">01 / Selected work</p><h2>Ideas, made real<span>.</span></h2></div><Link className="text-link" href="/projects">All projects ↗</Link></div><div className="work-grid">{projects.map((p, i) => <Link href={`/projects/${p.slug}`} className={`work-card work-${i}`} key={p.slug}><div className="work-visual"><div className="work-visual-top"><span>{p.highlight || "Data meets motorsport"}</span><span>0{i + 1} ↗</span></div><ProjectVisual project={p} /><span className="work-watermark">{p.title}</span></div><div className="work-title"><h3>{p.title}</h3><span>↗</span></div><p>{p.summary}</p><div className="project-tags">{p.meta.stack.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div></Link>)}</div></section>
    <section className="container-page recognition-row" aria-label="Selected achievements">{site.proof.slice(0, 3).map(p => <Link href={p.href!} key={p.label}><strong>{p.value}</strong><span>{p.label}<small>{p.context}</small></span><b>↗</b></Link>)}</section>
    <section id="art" className="container-page studio-section"><div className="section-top"><div><p className="label">02 / The creative side</p><h2>Beyond the code<span>.</span></h2></div><Link className="text-link" href="/art">Enter the gallery ↗</Link></div><p className="section-description">A selection of my character art, ink studies, and drawings from @kt_nafizart.</p><ArtGallery preview /></section>
    <section id="writing" className="container-page studio-section"><div className="section-top"><div><p className="label">03 / Field notes</p><h2>Thinking out loud<span>.</span></h2></div><Link className="text-link" href="/blog">The journal ↗</Link></div><Journal /></section>
    <section id="about" className="container-page studio-section about-studio"><div className="about-photo"><Image src={site.portrait.src} alt={site.portrait.alt} width={600} height={720} /><span className="photo-sticker">Always a work<br />in progress. ↗</span></div><div><p className="label">04 / A little about me</p><h2>More than<br />one dimension<span>.</span></h2><p>{site.about.paragraphs[0]}</p><p>{site.about.paragraphs[1]}</p><Link className="text-link" href="/resume">A closer look at my journey ↗</Link></div></section>
  </>;
}
