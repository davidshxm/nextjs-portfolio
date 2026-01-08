"use client"; 

import React, { useState, useMemo } from 'react';
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  tech: string;
  link: string;
  description: string[]; 
  image: string; 
}

export default function ProjectsPage() {
  // 1. State for managing selected filters
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

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
      tech: "Python, MediaPipe, OpenCV, Flask, HTML", 
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

  // 2. Extract all unique technologies from the projects array
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      // Split "Flutter, Flask" into individual tags and clean whitespace
      project.tech.split(',').forEach((t) => techSet.add(t.trim()));
    });
    // Return sorted array of unique tags
    return Array.from(techSet).sort();
  }, [projects]);

  // 3. Filter the projects based on selection
  const filteredProjects = useMemo(() => {
    // If no filters selected, show all
    if (selectedTechs.length === 0) return projects;

    return projects.filter((project) => {
      const projectTechs = project.tech.split(',').map((t) => t.trim());
      // Check if project has AT LEAST ONE of the selected tags
      return selectedTechs.some((selected) => projectTechs.includes(selected));
    });
  }, [projects, selectedTechs]);

  // 4. Toggle function
  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech) // Remove if already selected
        : [...prev, tech] // Add if not selected
    );
  };

  return (
    <div id="projects" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
        </p>
      </div>

      {/* --- Filter / Tags Section --- */}
      <div className="mb-16 p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
        <h2 className="text-sm font-semibold mb-6 text-gray-700 uppercase tracking-wide">
          Filter by Technology
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {/* "All" Reset Button */}
          <button
            onClick={() => setSelectedTechs([])}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2
              ${selectedTechs.length === 0 
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border-transparent shadow-lg scale-105' 
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
          >
            All
          </button>

          {/* Dynamic Tag Buttons */}
          {allTechs.map((tech) => {
            const isSelected = selectedTechs.includes(tech);
            return (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2
                  ${isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                  }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Filtered Project List --- */}
      <div className="space-y-20 min-h-[500px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <section 
              key={project.id} 
              id={project.id} 
              className="group opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                
                {/* Image Section */}
                {project.image ? (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image 
                        src={project.image} 
                        alt={`${project.name} screenshot`} 
                        fill 
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw" 
                      />
                    </div>
                  </div>
                ) : null}

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.split(',').map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8 leading-relaxed text-lg">
                    {project.description.map((point, index) => (
                      <li key={index} className="marker:text-blue-500">{point}</li>
                    ))}
                  </ul>

                  <div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      View Project 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </section>
          ))
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 text-lg mb-4">No projects match the selected filters.</p>
            <button 
              onClick={() => setSelectedTechs([])}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-medium transition-all shadow-md hover:shadow-lg"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}