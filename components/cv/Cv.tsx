import type { Cv as CvData } from "@/content/cv";
import { CvHeader } from "./CvHeader";
import { Education } from "./Education";
import { Role } from "./Role";
import { Section } from "./Section";
import { Skills } from "./Skills";

export function Cv({ data }: { data: CvData }) {
  return (
    <>
      <CvHeader profile={data.profile} />
      <main className="mx-auto w-full max-w-[1040px] px-5 pt-8 pb-24 sm:px-12 print:px-0 print:pt-4 print:pb-0">
        <Section id="summary" label="Professional Summary">
          <p className="text-body text-ink">{data.summary}</p>
        </Section>

        <Section id="experience" label="Experience">
          <div className="space-y-8">
            {data.experience.map((role) => (
              <Role key={`${role.org}-${role.start}`} role={role} />
            ))}
          </div>
        </Section>

        <Section id="volunteering" label="Volunteering">
          <div className="space-y-4">
            {data.volunteering.map((role) => (
              <Role key={`${role.org}-${role.start}`} role={role} />
            ))}
          </div>
        </Section>

        <Section id="education" label="Education">
          <Education schools={data.education} />
        </Section>

        <Section id="skills" label="Skills">
          <Skills groups={data.skills} />
        </Section>
      </main>
    </>
  );
}
