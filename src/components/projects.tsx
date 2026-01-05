"use client"; // 1. Ensure this is at the top since we are using event handlers

import React from 'react';

interface Project {
  id: string;
  name: string;
  tech: string;
  link: string;
  description: string[]; 
  image: string; 
}

export default function ProjectsPage() {
  const projects: Project[] = [
    { 
      id: "coocoo",
      name: "CooCoo", 
      tech: "Flutter, Flask, Python", 
      link: "https://devpost.com/software/coocoo",
      description: [
        "Developed an app that detects and flags potential misinformation in real-time conversations.",
        "Utilized Dart for front-end and Flask for local server processing.",
        "Leveraged Python for backend scripting and integrated C++ for performance-critical tasks."
      ],
      image: "/images/CooCoo.png" 
    },
    { 
      id: "bodysync",
      name: "BodySync", 
      tech: "Python, MediaPipe, OpenCV, FLASK, HTML", 
      link: "https://github.com/davidshxm/BodySync",
      description: ["Computer vision software that analyzes posture and movement in real-time for physical therapy."],
      image: "/images/BodySync.png" 
    },
    { 
      id: "qkdKit",
      name: "Quantum Key Distribution Kit", 
      tech: "Arduino, C++, PCB", 
      link: "https://github.com/davidshxm/QKDKit",
      description: ["A quantum key distribution toolkit for secure communication protocols."],
      image: "/images/QKDKit.jpg" 
    },
    { 
      id: "scanbites",
      name: "ScanBites", 
      tech: "AI, Flutter, Firebase", 
      link: "https://devpost.com/software/scanbite",
      description: ["A mobile app that scans food barcodes to provide nutritional analysis and health recommendations."],
      image: "/images/ScanBites.png" 
    },
    { 
      id: "synapse",
      name: "Synapse", 
      tech: "Autodesk Fusion, Arduino, C++", 
      link: "https://github.com/davidshxm/Bme-261-Haptic-Feedback-Arm-code",
      description: ["A haptic feedback robotic arm designed to simulate touch sensations for VR environments."],
      image: "/images/Synapse.png" 
    },
    { 
      id: "pushprogress",
      name: "PushProgress", 
      tech: "Solidworks, Arduino, C++", 
      link: "https://github.com/davidshxm/pushProgress",
      description: ["A gym tracking device that automatically counts reps and sets for weightlifting machines."],
      image: "/images/PushProgress.png" 
    },
    { 
      id: "icar",
      name: "iCar", 
      tech: "Arduino, C++", 
      link: "https://docs.google.com/document/d/1EJhNokKSmujg23n0-Mlz_YfAVpEVyQCotCoprlqSqf0/edit?usp=sharing",
      description: ["An autonomous vehicle prototype capable of obstacle avoidance and line following."],
      image: "/images/ICar.png" 
    },
  ];

  // 2. Add the Smooth Scroll Function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault(); // Stop the default "jump"
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this if the navbar covers the title
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="projects" className="max-w-4xl mx-auto p-6 pt-20">
      
      <h1 className="text-4xl font-bold mb-8 text-blue-500">Projects Portfolio</h1>

      {/* --- Table of Contents --- */}
      <nav className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 uppercase tracking-wide">
          Table of Contents
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {projects.map((project) => (
            <li key={project.id}>
              <a 
                href={`#${project.id}`} 
                onClick={(e) => handleScroll(e, project.id)}
                className="flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded transition-colors cursor-pointer"
              >
                <span className="mr-2">🔹</span> {project.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Detailed Project List --- */}
      <div className="space-y-16">
        {projects.map((project) => (
          <section 
            key={project.id} 
            id={project.id} 
            className="scroll-mt-24 group" 
          >
            <div className="flex flex-col md:flex-row gap-8 border-b pb-12 border-gray-200">
              
              {/* Image Section*/}
              {project.image ? (
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                    <img 
                      src={project.image} 
                      alt={`${project.name} screenshot`} 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ) : (
                /* OPTIONAL: Render a placeholder if no image exists to keep layout consistent */
                <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-xl h-64 border border-gray-200">
                  <span className="text-gray-400 font-medium">No Image Available</span>
                </div>
              )}

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-400 mb-3">
                  {project.name}
                </h3>
                
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                    {project.tech}
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-6 leading-relaxed">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md"
                  >
                    View Project 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}