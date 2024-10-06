import { useState } from "react";
import Titles from "./titles";
import Descriptions from "./descriptions";

export default function Projects({ projects }: any) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="absolute z-10 w-full">
      <Titles data={projects} setSelectedProject={setSelectedProject} />
      <Descriptions data={projects} selectedProject={selectedProject} />
    </div>
  );
}
