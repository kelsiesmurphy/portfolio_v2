import { useState } from "react";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    title: "BJSS",
    color: "#f3b549",
    speed: 0.8,
  },
  {
    title: "PlanetCareer",
    color: "#3e7e42",
    speed: 0.5,
  },
  {
    title: "CommunitySpot",
    color: "#ffffff",
    speed: 0.67,
  },
  {
    title: "GreenCheck",
    color: "#2a5e47",
    speed: 0.5,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="absolute z-10 w-full">
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
