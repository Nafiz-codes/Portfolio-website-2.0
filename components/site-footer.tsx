import Link from "next/link";
import { site } from "@/content/site";
import { SocialIcons } from "./social-links";
export function SiteFooter() { return <footer className="studio-footer"><div className="container-page"><p className="label">Have an interesting idea?</p><a href={`mailto:${site.social.email}`} className="footer-title">Let’s make<br />something <em>matter.</em><span>↗</span></a><div className="footer-bottom"><Link href="/">Nafiz Shahriar Sami <span className="text-muted">/ Built with curiosity.</span></Link><SocialIcons /><a href="#main" className="text-link">Back to top ↑</a></div></div></footer> }
