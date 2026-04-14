import { Header, Hero, Services, HowItWorks, Technologies, CTA, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Technologies />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
