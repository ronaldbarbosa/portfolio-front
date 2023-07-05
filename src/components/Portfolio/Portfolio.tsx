import { useEffect, useState } from "react";

import { fetchProjects as getProjects } from "@/services/api";

import PortfolioItem from "./PortfolioItem/PortfolioItem";
import PortfolioTitle from "./PortfolioTitle";
import LoadingPage from "../LoadingPage";

export interface Project {
  id: string;
  name: string;
  description: string;
  frontend: string;
  backend: string;
  tools: string;
  url: string;
  code: string;
  image: string;
  finished: boolean
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   fetch('https://portfolio-ronald.azurewebsites.net/api/Project')
  //     .then(response => response.json())
  //     .then(data => setProjects(data))
  //     .catch(error => console.log('Ocorred an error: ', error))
  // }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    setTimeout(() => fetchProjects(), 5000);
  }, []);

  if (projects.length === 0) return <LoadingPage info="project list" />

  return(
    <div className="text-white px-5">
      <PortfolioTitle />
      <div className="flex flex-wrap justify-around">
        {projects.map(project => {
          return(
            <PortfolioItem project={ project } key={ project.id }/>
          )
        })}
      </div>
    </div>
  );
}
