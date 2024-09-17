import Card from "../ui/Card";
import { projectData } from "../../data/project";
const Project = () => {
  return (
    <div className="flex flex-col">
      <h1 className=" text-4xl lg:text-6xl font-bold mb-12 lg:mb-32">
        Recent Project
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-12">
        {projectData.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            img={project.image}
            description={project.description}
            icon={project.icon}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
