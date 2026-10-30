import Link from "next/link";
import { posts } from "@/content/studio";
export function Journal() { return <div className="journal-list">{posts.map((p, i) => <Link href={`/blog/${p.slug}`} className="journal-row" key={p.slug}><span className="journal-number">0{i + 1}</span><div><span className="label">{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p></div><span className="journal-status">{p.status}</span><span className="journal-arrow">↗</span></Link>)}</div> }
