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
            <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-3 translate-y-3"></div>
            
          </div>

          {/* 2. Bio Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello, I'm <span className="text-blue-600">[Your Name]</span>
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {/* PASTE YOUR CHOSEN TEXT OPTION HERE */}
              I am a developer passionate about bridging the gap between software 
              and the physical world. With a background in Computer Engineering, 
              I specialize in building full-stack applications and integrating 
              them with hardware systems. Whether it's computer vision, IoT 
              devices, or mobile apps, I love engineering solutions that work 
              seamlessly.
            </p>

            {/* 3. Quick Stats / Skills Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <span className="block font-bold text-gray-900">Education</span>
                <span className="text-gray-500">[Your University]</span>
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <span className="block font-bold text-gray-900">Location</span>
                <span className="text-gray-500">Toronto, ON</span>
              </div>
            </div>

            {/* 4. Social Links */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium underline">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-black font-medium underline">
                GitHub
              </a>
              <a href="mailto:your@email.com" className="text-gray-600 hover:text-red-500 font-medium underline">
                Email Me
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}