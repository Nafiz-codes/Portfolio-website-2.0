import { isTodo, site } from "@/content/site";
import { ButtonLink } from "./button-link";
import { DownloadIcon } from "./icons";

export function ResumeButton({ variant = "secondary" }: { variant?: "primary" | "secondary" }) {
  if (isTodo(site.resumePdf)) return null;
  return (
    <ButtonLink href={site.resumePdf} variant={variant} download>
      <DownloadIcon />
      Download resume
    </ButtonLink>
  );
}
