import Image from "next/image";

// 1. Import the components we created
import AboutMe from "@/components/aboutMe";
import Project from "@/components/projects";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
    
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen py-24 px-6 overflow-hidden">
        {/* Animated gradient background with music vibes */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-indigo-50/40 to-amber-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.12),transparent_50%)]"></div>
        {/* Floating musical notes */}
        <div className="absolute top-20 left-10 text-purple-300/50 animate-music-note" style={{ animationDelay: '0s' }}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div className="absolute top-36 right-16 text-amber-300/50 animate-music-note" style={{ animationDelay: '0.6s' }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div className="absolute bottom-28 left-24 text-indigo-300/50 animate-music-note" style={{ animationDelay: '1.2s' }}>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="mb-8 relative group">
            {/* Profile photo with animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden rounded-full shadow-2xl border-4 border-white ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300 transform group-hover:scale-105">
              <Image
                src="/images/HeaderImage.JPG"
                alt="Profile photo of David"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Musical note accent */}
            <div className="absolute -top-4 -right-4 text-purple-400 animate-float">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 text-center">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">David</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center leading-relaxed mb-8">
            I compose <span className="font-semibold text-purple-600">code</span> and craft <span className="font-semibold text-amber-600">music</span>, blending technology and creativity into harmonious experiences.
          </p>
          
          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
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