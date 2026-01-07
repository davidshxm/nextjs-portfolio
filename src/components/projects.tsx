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
    <div id="projects" className="max-w-4xl mx-auto p-6 pt-20">
      
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-4xl font-bold text-blue-500">Projects</h1>
        <span className="text-gray-500 text-sm">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
        </span>
      </div>

      {/* --- Filter / Tags Section --- */}
      <div className="mb-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-sm font-semibold mb-4 text-gray-500 uppercase tracking-wide">
          Filter by Technology
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {/* "All" Reset Button (Optional but good UX) */}
          <button
            onClick={() => setSelectedTechs([])}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              ${selectedTechs.length === 0 
                ? 'bg-gray-800 text-white border-gray-800' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${isSelected
                    ? 'bg-blue-500 text-white border-blue-500 shadow-md transform scale-105'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                  }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Filtered Project List --- */}
      <div className="space-y-16 min-h-[500px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <section 
              key={project.id} 
              id={project.id} 
              // Added generic animation classes for smooth filtering appearance
              className="group animate-in fade-in slide-in-from-bottom-4 duration-500" 
            >
              <div className="flex flex-col md:flex-row gap-8 border-b pb-12 border-gray-200">
                
                {/* Image Section*/}
                {project.image ? (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative h-64 overflow-hidden rounded-xl shadow-lg border border-gray-100">
                      {/* NOTE: We added 'relative' to the div above. 
                        Next.js Image with 'fill' needs a relative parent to know how big to be.
                      */}
                      <Image 
                        src={project.image} 
                        alt={`${project.name} screenshot`} 
                        fill 
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw" 
                      />
                    </div>
                  </div>
                ) : null}

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
          ))
        ) : (
          /* Empty State if filter yields no results (unlikely with OR logic, but good safety) */
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No projects match the selected filters.</p>
            <button 
              onClick={() => setSelectedTechs([])}
              className="mt-4 text-blue-500 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}