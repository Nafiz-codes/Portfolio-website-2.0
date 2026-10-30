import { Journal } from "@/components/journal";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({ title: "Field notes", description: "A notebook on engineering, learning, and creative practice.", path: "/blog" });
export default function Blog() { return <section className="container-page studio-section"><p className="label">The journal / Ideas in progress</p><h1 className="page-display">Thinking out loud<span>.</span></h1><p className="section-description">A home for longer thoughts on building software, learning in public, and connecting the dots. First entries are in the notebook.</p><Journal /></section> }
