import Image from "next/image"; 
import myProfilePic from '../assets/DavidShim.jpeg';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center uppercase tracking-wider">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* 1. Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
            
            {/* Decorative Background Blob (Offset to the right) */}
            <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-4 translate-y-4"></div>
            
            {/* The Image Container */}
            {/* We use a relative div here to clip the image into a circle and add the white border */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm">
              <Image
                src={myProfilePic}
                alt="David's Profile"
                placeholder="blur"
                fill                  // 1. Makes image fill the parent container
                className="object-cover" // 2. Ensures the image crops, doesn't stretch
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 3. Optimization for performance
              />
            </div>
          </div>

          {/* 2. Bio Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello, I&apos;m <span className="text-blue-600">David</span>
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a developer passionate about bridging the gap between software and the physical world. 
              By combining a background in Biomedical Engineering with Full-Stack expertise, I build tools
              that don't just run on a screen, but impact real lives. I am currently focused on Medical AI 
              and Neural Engineering, while sharpening my skills in CAD and Machine Learning. I’m eager to 
              join an R&D or engineering team tackling complex challenges in health-tech or backend systems.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When I&apos;m not coding, I&apos;m likely arranging new guitar covers, singing, or 
              staying active through sports. I believe maintaining a creative and 
              active lifestyle keeps my problem-solving skills sharp and my perspective fresh.
            </p>

            {/* 3. Quick Stats / Skills Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <span className="block font-bold text-gray-900">Education</span>
                <span className="text-gray-500">University of Waterloo</span>
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <span className="block font-bold text-gray-900">Location</span>
                <span className="text-gray-500">Toronto, ON</span>
              </div>
            </div>

            {/* 4. Social Links */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/david-shim/" className="text-gray-600 hover:text-blue-600 font-medium underline">
                LinkedIn
              </a>
              <a href="https://github.com/davidshxm" className="text-gray-600 hover:text-black font-medium underline">
                GitHub
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}