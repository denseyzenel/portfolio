import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SleepingCat from "@/components/SleepingCat";
import AboutTeaser from "@/components/AboutTeaser";
import SkillsMarquee from "@/components/SkillsMarquee";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Densey Zenel Maben | Data Analyst (SQL, Python, Power BI)",
  description:
    "Data Analyst with 3+ years at Capgemini and an MSc in Data Science for Business (Distinction). SQL, Python, Power BI and Databricks. Based in Stirling, UK.",
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
