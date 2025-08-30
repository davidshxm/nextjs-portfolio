interface Project {
  name: string;
  tech: string;
  link: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    { name: "CooCoo", tech: "Flutter, Flask, Python", link: "#" },
    { name: "iCar", tech: "Arduino, C++", link: "#" },
    { name: "ScanBites", tech: "AI, Flutter, Firebase", link: "#" },
  ];

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project, idx) => (
          <li key={idx} className="p-4 border rounded-lg shadow-md">
            <strong>{project.name}</strong> — {project.tech}{" "}
            <a href={project.link} className="text-blue-500 hover:underline">
              View
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
