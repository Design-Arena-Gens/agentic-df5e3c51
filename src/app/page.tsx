import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { ReservationForm } from "@/components/ReservationForm";
import { About } from "@/components/About";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-neutral-100 pb-24">
      <Header />
      <main className="mx-auto mt-32 flex max-w-6xl flex-col gap-16 px-6">
        <Hero />
        <Menu />
        <About />
        <ReservationForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
