import api from "@/services/api";
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import PortfolioTitle from "./PortfolioTitle";

export interface Project {
  id: string;
  name: string;
  description: string;
  frontend: string;
  backend: string;
  devOps: string;
  url: string;
  image: string;
  finished: boolean
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   api.get('').then((response) => setProjects(response.data)).catch((err) => {
  //     console.error('Ocorreu um erro: ', err);
  //   })
  // }, []);

  useEffect(() => {
    fetch('https://portfolio-ronald.azurewebsites.net/api/Project')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.log('Ocorred an error: ', error))
  }, [])

  return(
    <div className="text-white px-5">
      <PortfolioTitle />
      <div className="flex">
        {projects.map(project => {
          return(
            <PortfolioItem project={ project } key={ project.id }/>
          )
        })}
      </div>
    </div>
  );
}
