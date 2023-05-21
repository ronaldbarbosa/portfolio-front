import api from "@/services/api";
import { useEffect, useState } from "react";

interface Project {
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
    fetch('http://localhost:5152/api/Project')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.log('Ocorred an error: ', error))
  }, [])

  return(
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => {
          return(
            <li key={ project.id }>
              { project.name }
            </li>
          )
        })}
      </ul>
    </div>
  );
}
