import MainSection from "@/app/(DASHBOARD)/MainSection/page";
import Services from "@/app/(DASHBOARD)/ServiceSection/page";
import Events from "@/app/(DASHBOARD)/Event/page";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Islamic University  Research",
  description: "Sufi University Research details.",
};

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainSection />
      <Services />
      <Events />
      <Footer />
    </div>
  );
}
