import Image from "next/image"; 
import myProfilePic from '../assets/DavidShim.jpeg';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-purple-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Musical decorative elements */}
      <div className="absolute top-12 right-10 text-purple-200/40 animate-float">
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-8 text-amber-200/40 animate-float" style={{ animationDelay: '0.8s' }}>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Profile Image */}
          <div className="w-56 h-56 md:w-72 md:h-72 relative flex-shrink-0 group">
            {/* Decorative Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-200 to-amber-200 rounded-full transform translate-x-4 translate-y-4 opacity-60 group-hover:opacity-80 transition-opacity duration-300 blur-xl"></div>
            
            {/* The Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300 transform group-hover:scale-105">
              <Image
                src={myProfilePic}
                alt="David's Profile"
                placeholder="blur"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hello, I&apos;m <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">David</span>
            </h3>
            
            <div className="space-y-4 mb-8 text-gray-700 text-lg leading-relaxed">
              <p>
                I am a developer passionate about bridging the gap between software and the physical world. 
                By combining a background in <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Biomedical Engineering</span> with <span className="font-semibold bg-gradient-to-r from-indigo-600 to-amber-600 bg-clip-text text-transparent">Full-Stack expertise</span>, I build tools
                that don&apos;t just run on a screen, but impact real lives. I am currently focused on Medical AI 
                and Neural Engineering, while sharpening my skills in CAD and Machine Learning. I&apos;m eager to 
                join an R&D or engineering team tackling complex challenges in health-tech or backend systems.
              </p>

              <p>
                When I&apos;m not coding, I&apos;m likely <span className="font-semibold text-purple-600">arranging new guitar covers</span>, <span className="font-semibold text-amber-600">singing</span>, or 
                staying active through sports. I believe maintaining a creative and 
                active lifestyle keeps my problem-solving skills sharp and my perspective fresh—much like how melody, rhythm, and harmony blend together.
              </p>
            </div>

            {/* Quick Stats / Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute top-2 right-2 text-purple-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <span className="block font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">Education</span>
                <span className="text-gray-600">University of Waterloo</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute top-2 right-2 text-amber-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <span className="block font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Location</span>
                <span className="text-gray-600">Toronto, ON</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/david-shim/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/davidshxm" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-amber-600 text-white rounded-lg hover:from-indigo-700 hover:to-amber-700 font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}