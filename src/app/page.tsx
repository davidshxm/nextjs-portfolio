import Image from "next/image";

// 1. Import the components we created
import AboutMe from "@/components/aboutMe";
import Project from "@/components/projects";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
    
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen py-24 px-6 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="mb-8 relative group">
            {/* Profile photo with animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden rounded-full shadow-2xl border-4 border-white ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300 transform group-hover:scale-105">
              <Image
                src="/images/HeaderImage.JPG"
                alt="Profile photo of David"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 text-center">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">David</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center leading-relaxed mb-8">
            I'm passionate about <span className="font-semibold text-blue-600">design</span> and
            enjoy building projects that blend technology and creativity.
          </p>
          
          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <AboutMe />
      
      <Project />
      
      <ContactPage />

    </main>
  );
}