import MainSection from "@/app/(DASHBOARD)/components/MainSection";
import Services from "@/app/(DASHBOARD)/components/ServiceSection";
import Events from "@/app/(DASHBOARD)/components/Event";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import MissionAndVissionPage from "@/app/(DASHBOARD)/components/MissionAndVisson/";

export const metadata = {
  title: "Islamic University  Research",
  description: "Sufi University Research details.",
};

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainSection />
      <MissionAndVissionPage/>
      <Services />
      <Events />
      <Footer />
    </div>
  );
}
