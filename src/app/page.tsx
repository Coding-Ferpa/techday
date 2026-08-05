import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Schedule from "@/components/sections/Schedule";
import Workshops from "@/components/sections/Workshops";
import Location from "@/components/sections/Location";
import Partners from "@/components/sections/Partners";
import PartnerCTA from "@/components/sections/PartnerCTA";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <Schedule />
      <Workshops />
      <Location />
      <Partners />
      <PartnerCTA />
      <About />
    </>
  );
}
