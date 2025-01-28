import Image from "next/image";
// import { Button } from "@/components/ui/button";
import bgImage from "@images/slide-2.jpg";
import BismilAllah from "@images/bsml-txt.webp";

export default function MainSection() {
  return (
    <section className="relative h-screen">
      <Image
        src={bgImage}
        alt="Blue Mosque illuminated at night"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="flex justify-end mb-4">
            <Image
              src={BismilAllah}
              alt="Blue Mosque illuminated at night"
              width={400} // Set the width for better resolution
              height={200} // Set the corresponding height
              className="object-cover"
              priority
              quality={100} // Adjust the quality (default is 75, you can increase it to 100)
             
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Azdiya Sufi Teachings
          </h1>
          <p className="text-xl mb-8">
            Organisation for Promoting Shari`ah Compliant Sufism
          </p>
          {/* <Button className="bg-[#C5A059] hover:bg-[#B08E4C] text-white px-8 py-6 text-lg">
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  );
}
