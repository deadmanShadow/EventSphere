import CTA from "@/components/modules/Home/CTA";
import EventCategories from "@/components/modules/Home/EventCategories";
import FAQ from "@/components/modules/Home/FAQ";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import PopularEvents from "@/components/modules/Home/PopularEvents";
import Testimonials from "@/components/modules/Home/Testimonials";
import TopRatedHosts from "@/components/modules/Home/TopRatedHosts";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Head from "next/head";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>EventSphere</title>
        <meta
          name="description"
          content="Simple and smart event management for everyone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AnimatedSection direction="down">
          <Hero />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.2}>
          <PopularEvents />
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <EventCategories />
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <HowItWorks />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.2}>
          <TopRatedHosts />
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.2}>
          <FAQ />
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.4}>
          <CTA />
        </AnimatedSection>
      </main>
    </>
  );
};

export default HomePage;
