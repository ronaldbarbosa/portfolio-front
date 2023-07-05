import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { fetchProjectById } from "@/services/api";

import { Project } from "@/components/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo";
import LoadingPage from "@/components/LoadingPage";


export default function ProjectDetails(){
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const data = await fetchProjectById(id);
        setProject(data);
      } catch(error) {
        console.error("Error: ", error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Head>
          <title>Loading..</title>
        </Head>
        <Header />
        <LoadingPage info="project info" />
        <Footer />
      </div>
    )
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>{ project.name }</title>
      </Head>
      <Header />
      <ProjectInfo project={ project } />
      <Footer />
    </div>
  )
}
