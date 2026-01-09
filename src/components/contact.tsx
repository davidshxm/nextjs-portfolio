import React from 'react';

export default function ContactPage() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-gradient-to-b from-purple-50/50 via-indigo-50/30 to-amber-50/40 relative overflow-hidden">
      {/* Musical decorative elements */}
      <div className="absolute top-20 left-10 text-purple-200/40 animate-float">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div className="absolute bottom-28 right-16 text-amber-200/40 animate-float" style={{ animationDelay: '1.3s' }}>
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
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
              Get In <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          
          {/* LEFT SIDE: Socials & Info */}
          <div className="p-10 md:p-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-amber-600 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Social Links */}
            <div className="relative z-10 space-y-6">
              <p className="font-semibold text-blue-200 uppercase tracking-wider text-sm">Follow Me</p>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/david-shim/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/guitar_shxms?igsh=aG14dHB0eHRyMnZp&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/david.shim.986" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="p-10 md:p-12 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Send me a message</h3>
            
            <form 
              action="https://formspree.io/f/mykzrggj" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 hover:from-purple-700 hover:via-indigo-700 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}