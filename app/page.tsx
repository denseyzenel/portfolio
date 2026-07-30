import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SleepingCat from "@/components/SleepingCat";
import AboutTeaser from "@/components/AboutTeaser";
import SkillsMarquee from "@/components/SkillsMarquee";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Densey Zenel Maben — Data Analyst",
  description:
    "Data Analyst with an MSc Data Science for Business (Distinction). SQL, Python and Power BI work in data validation, reconciliation and reporting.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
     
      <AboutTeaser />
      <SkillsMarquee />
      <Work />
      <Contact />
    </>
  );
}
