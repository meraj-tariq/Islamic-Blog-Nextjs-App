import MainSection from "@/app/(main)/components/MainSection";
import Services from "@/app/(main)/components/ServiceSection";
import Events from "@/app/(main)/components/Event";
// import { Footer } from "@/components/layout/Footer";
// import { Header } from "@/components/layout/Header";
import MissionAndVissionPage from "@/app/(main)/components/MissionAndVisson";

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
