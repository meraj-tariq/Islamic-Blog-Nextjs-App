import MainSection from "@/components/(main)/components/MainSection";
import Services from "@/components/(main)/components/ServiceSection";
import Events from "@/components/(main)/components/Event";
// import { Footer } from "@/components/layout/Footer";
// import { Header } from "@/components/layout/Header";
import MissionAndVissionPage from "@/components/(main)/components/MissionAndVisson";

// export const metadata = {
//   title: "Islamic University  Research",
//   description: "Sufi University Research details.",
// };

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <MainSection />
      <MissionAndVissionPage />
      <Services />
      <Events />
      {/* <Footer /> */}
    </div>
  );
}
