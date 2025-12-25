import React from 'react';

// 1. Updated Interface to include description, image, and a unique ID
interface Project {
  id: string;
  name: string;
  tech: string;
  link: string;
  description: string []; // Brief description of the project
  image: string; // URL to the image
}

export default function ProjectsPage() {
  // 2. Updated Data with descriptions and placeholder images
  // Replace the 'image' strings with your actual file paths (e.g., "/images/coocoo.png")
  const projects: Project[] = [
    { 
      id: "coocoo",
      name: "CooCoo", 
      tech: "Flutter, Flask, Python", 
      link: "https://devpost.com/software/coocoo",
      description: ["Developed an app that detects and flags potential misinformation in real-time conversations, informing users and enhancing clarity.",
                      'Utilized Dart for front-end development and Flask to set up a local server for information retrieval and processing.',
                      'Leveraged Python for backend scripting, data manipulation, and API development, and integrated C++ for performance critical tasks, enabling efficient processing and optimized performance.'
                    ],
      image: "https://via.placeholder.com/400x250?text=CooCoo+Project" 
    },
    { 
      id: "icar",
      name: "iCar", 
      tech: "Arduino, C++", 
      link: "#",
      description: ["An autonomous vehicle prototype capable of obstacle avoidance and line following.",

      ],
      image: "https://via.placeholder.com/400x250?text=iCar+Project" 
    },
    { 
      id: "scanbites",
      name: "ScanBites", 
      tech: "AI, Flutter, Firebase", 
      link: "https://devpost.com/software/scanbite",
      description: ["A mobile app that scans food barcodes to provide nutritional analysis and health recommendations."],
      image: "https://via.placeholder.com/400x250?text=ScanBites" 
    },
    { 
      id: "bodysync",
      name: "BodySync", 
      tech: "Python, MediaPipe, OpenCV, FLASK, HTML", 
      link: "#",
      description: ["Computer vision software that analyzes posture and movement in real-time for physical therapy."],
      image: "https://via.placeholder.com/400x250?text=BodySync" 
    },
    { 
      id: "feelarm",
      name: "FeelArm", 
      tech: "Autodesk Fusion, Arduino, C++", 
      link: "#",
      description: ["A haptic feedback robotic arm designed to simulate touch sensations for VR environments."],
      image: "https://via.placeholder.com/400x250?text=FeelArm" 
    },
    { 
      id: "pushprogress",
      name: "PushProgress", 
      tech: "Solidworks, Arduino, C++", 
      link: "#",
      description: ["A gym tracking device that automatically counts reps and sets for weightlifting machines."],
      image: "https://via.placeholder.com/400x250?text=PushProgress" 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Projects Portfolio</h1>

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
                className="flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded transition-colors"
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
            className="scroll-mt-8 group" // scroll-mt ensures the header doesn't cover the title when jumping
          >
            <div className="flex flex-col md:flex-row gap-8 border-b pb-12 border-gray-200">
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">
                  {project.name}
                </h3>
                
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                    {project.tech}
                  </span>
                </div>

                {/* UPDATED: Rendering the list */}
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 leading-relaxed">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div>
                  <a href={project.link} className="...">
                    {/* ... button code ... */}
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