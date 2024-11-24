import { ExperienceTabs } from "@/components/ui/experience-tabs";
import { ResumeLink } from "@/components/ui/resume-link";
import { SocialLinks } from "@/components/ui/social-links";
import { LongParagraph } from "@/components/ui/long-paragraph";
import { Avatar } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { RepoCard } from "@/components/ui/repo-card";
import { SeeMoreLink } from "@/components/ui/seemore-link";
import { fetchRepository } from "@/utils/fetch";

export default async function Home() {
  const repositories = await Promise.all(
    featureProjects.map((project) => fetchRepository(project)),
  );

  return (
    <div className="space-y-16">
      {/* about me */}
      <div className="flex items-center gap-16 max-sm:flex-col">
        <div className="flex-1 max-sm:order-1">
          <h1 className="mb-5 font-mplus text-4xl font-bold capitalize">
            {bio.title}
          </h1>
          <p>{bio.subtitle}</p>
          <LongParagraph className="mt-2.5">{bio.description}</LongParagraph>

          <div className="mt-5 flex items-center gap-6">
            {/* resume */}
            <ResumeLink />

            {/* social links */}
            <SocialLinks />
          </div>
        </div>

        <Avatar src="/images/avatar.jpg" alt="Sothearo's avatar" />
      </div>

      {/* work / education */}
      <ExperienceTabs />

      {/* feature projects -> see more */}
      <div className="grid space-y-6">
        <Heading>Feature projects</Heading>
        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {repositories.map((repository, idx) => (
            <RepoCard key={idx} repository={repository} />
          ))}
        </div>
        <div className="text-center">
          <SeeMoreLink />
        </div>
      </div>
    </div>
  );
}

const bio = {
  title: "kay sothearo",
  subtitle: "A frontend developer based in Phnom Penh 🇰🇭",
  description: `I am passionate about reading, especially graphic novels such as manga and manhwa. I find great joy in coding, embracing the challenge of creating intricate user interfaces, and I thrive on learning through insightful articles.`,
};

const featureProjects = [
  { title: "Netflix Clone", repoId: "netflix-clone" },
  { title: "Checkout Cart", repoId: "checkout-cart" },
];
