import { Cv } from "@/components/cv/Cv";
import { cv } from "@/content/cv";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cv.profile.name,
  jobTitle: cv.profile.headline,
  email: `mailto:${cv.profile.email}`,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  address: { "@type": "PostalAddress", addressLocality: "Newcastle", addressCountry: "GB" },
  sameAs: [cv.profile.links.linkedin.url, cv.profile.links.github.url],
  alumniOf: cv.education.map((school) => ({
    "@type": "EducationalOrganization",
    name: school.org,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Cv data={cv} />
    </>
  );
}
