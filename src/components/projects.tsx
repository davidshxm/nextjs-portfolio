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
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-indigo-50/40 via-purple-50/30 to-amber-50/30 overflow-hidden">
      {/* Floating musical notes */}
      <div className="absolute top-16 left-8 text-purple-200/40 animate-float">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div className="absolute top-32 right-12 text-indigo-200/40 animate-float" style={{ animationDelay: '0.5s' }}>
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div className="absolute bottom-24 left-16 text-amber-200/40 animate-float" style={{ animationDelay: '1s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div className="absolute top-64 right-24 text-purple-200/30 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-8 text-indigo-200/30 animate-float" style={{ animationDelay: '0.8s' }}>
        <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            My <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-700 text-lg font-medium">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
        </p>
      </div>

      {/* --- Filter / Tags Section --- */}
      <div className="mb-16 p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-purple-100 shadow-lg">
        <h2 className="text-sm font-semibold mb-6 text-gray-800 uppercase tracking-wide">
          Filter by Technology
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {/* "All" Reset Button */}
          <button
            onClick={() => setSelectedTechs([])}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2
              ${selectedTechs.length === 0 
                ? 'bg-gradient-to-r from-purple-700 via-indigo-700 to-amber-700 text-white border-transparent shadow-lg scale-105' 
                : 'bg-white text-gray-800 border-purple-200 hover:border-purple-400 hover:bg-purple-50'
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
                    ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 text-white border-transparent shadow-lg transform scale-105'
                    : 'bg-white text-gray-800 border-purple-200 hover:bg-purple-50 hover:border-purple-400'
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
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
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
                <div className="w-full md:w-1/2 flex flex-col justify-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-purple-100 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                  </div>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.split(',').map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-purple-100 via-indigo-100 to-amber-100 text-purple-900 text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc pl-6 space-y-3 text-gray-800 mb-8 leading-relaxed text-lg font-medium">
                    {project.description.map((point, index) => (
                      <li key={index} className="marker:text-purple-600">{point}</li>
                    ))}
                  </ul>

                  <div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 text-white rounded-lg hover:from-purple-700 hover:via-indigo-700 hover:to-amber-700 font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
          <div className="text-center py-20 bg-gradient-to-br from-purple-50/60 via-indigo-50/50 to-amber-50/60 rounded-2xl border-2 border-dashed border-purple-200">
            <svg className="w-16 h-16 mx-auto text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-800 text-lg mb-4 font-medium">No projects match the selected filters.</p>
            <button 
              onClick={() => setSelectedTechs([])}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 text-white rounded-lg hover:from-purple-700 hover:via-indigo-700 hover:to-amber-700 font-medium transition-all shadow-md hover:shadow-lg"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}