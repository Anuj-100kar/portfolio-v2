import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="mt-24">
      <h2 className="text-4xl font-bold mb-10">
        Other Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}