import { ArtGallery } from "@/components/art-gallery";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({ title: "Art & experiments", description: "A space for visual experiments and creative exploration.", path: "/art" });
export default function ArtPage() { return <section className="container-page studio-section"><p className="label">The gallery / Visual explorations</p><h1 className="page-display">Beyond the code<span>.</span></h1><p className="section-description">Selected drawings and character studies from my art account, @kt_nafizart. Open a piece to see its original Instagram post.</p><ArtGallery /></section> }
