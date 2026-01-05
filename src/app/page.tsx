import Image from "next/image";

// 1. Import the components we created
import AboutMe from "@/components/aboutMe";
import Project from "@/components/projects";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
    
      <section id="home" className="flex flex-col items-center justify-center py-24 bg-white">
        <div className="mb-8 relative">
          {/* Example profile photo */}
          <div className="w-48 h-48 relative overflow-hidden rounded-full shadow-xl border-4 border-gray-100">
             <Image
              src="/images/HeaderImage.JPG" // Make sure this matches your file path in public/images/
              alt="Profile photo of David"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-gray-900">Hi, I’m David</h1>
        <p className="text-xl text-gray-600 max-w-lg text-center leading-relaxed">
          I’m passionate about <span className="font-semibold text-blue-600">design</span> and
          enjoy building projects that blend technology and creativity.
        </p>
      </section>

      {/* --- THE REST OF YOUR SECTIONS --- */}
      
      {/* NOTE: Since you have a photo/intro above, you might 
         want to remove the photo from AboutMe.tsx later to avoid duplicates.
      */}
      <AboutMe />
      
      <Project />
      
      <ContactPage />

    </main>
  );
}