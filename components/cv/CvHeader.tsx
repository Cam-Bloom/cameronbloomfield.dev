import type { Profile } from "@/content/cv";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { HeaderBackdrop } from "./HeaderBackdrop";

const pill =
  "inline-flex items-center gap-1 rounded-full border px-4 py-2 text-chip font-semibold underline decoration-from-font underline-offset-2 transition-colors";

export function CvHeader({ profile }: { profile: Profile }) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <HeaderBackdrop />
      <div className="relative mx-auto flex w-full max-w-[1040px] flex-col items-center px-5 pt-16 pb-8 text-center sm:px-12 sm:pt-20 print:pt-4 print:pb-5">
        <h1 className="text-[2rem] leading-[1.1] font-extrabold text-ink sm:text-name">
          {profile.name}
        </h1>
        <p className="mt-2 text-subtitle font-medium text-ink-muted">{profile.headline}</p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-body text-ink">
          <li className="inline-flex items-center gap-1">
            <MapPinIcon className="h-3.5 w-auto" />
            <span>{profile.location}</span>
          </li>
          <li className="inline-flex items-center gap-1">
            <MailIcon className="h-[9px] w-auto" />
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>
          </li>
        </ul>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <li>
            <a
              href={profile.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} border-linkedin bg-linkedin-bg text-linkedin hover:bg-white`}
            >
              <LinkedInIcon className="size-4" />
              <span>
                <span className="sr-only">LinkedIn </span>
                {profile.links.linkedin.handle}
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} border-github bg-github-bg text-github hover:bg-white`}
            >
              <GitHubIcon className="size-4" />
              <span>
                <span className="sr-only">GitHub </span>
                {profile.links.github.handle}
              </span>
            </a>
          </li>
          <li className="cv-print-hide">
            <a
              href={site.cvPdfPath}
              download="Cameron-Bloomfield-CV.pdf"
              className={`${pill} border-ink bg-white text-ink hover:bg-chip`}
            >
              <DownloadIcon className="size-4" />
              <span>Download PDF</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
