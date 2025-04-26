import { useEffect, useState } from "react";

import { fetchProjects as getProjects } from "@/services/api";

import PortfolioItem from "./PortfolioItem/PortfolioItem";
import PortfolioTitle from "./PortfolioTitle";
import LoadingPage from "../LoadingPage";
import BackToTop from "../BackToTop";

export interface Project {
  id: string;
  name: string;
  description: string;
  deployUrl: string;
  imgUrl: string;
  projectType: Project
}

export enum ProjectType {
  Frontend,
  Backend
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

    fetchProjects();
  }, []);

  if (projects.length === 0) return <LoadingPage info="Loading project list. The first request to server takes more time." />

  return(
    <>
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
      <BackToTop />
    </>
  );
}
