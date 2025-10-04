export const metadata = {
  title: "Nikan Techno",
  description: "Nikan Company",
   icons: {
    icon: "/Nikan Tech.png"
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import TeamWorks from "@/components/teamWorks"
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <TeamWorks/>
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
