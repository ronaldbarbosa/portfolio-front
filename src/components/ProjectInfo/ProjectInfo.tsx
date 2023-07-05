import Link from "next/link";
import { BiCloudUpload, BiCodeAlt } from "react-icons/bi";
import { RiArrowLeftCircleLine } from "react-icons/ri"

import { Project } from "../Portfolio/Portfolio";
import InfoRow from "./InfoRow";

interface ProjectProps {
  project: Project
}

export default function ProjectInfo(props: ProjectProps) {


  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-3/5 max-xl:w-5/6 max-sm:w-11/12 mb-5">
        <div className="text-center">
          <h3 className="text-3xl max-xl:text-2xl text-green">{ props.project.name }</h3>
        </div>
      </div>

      <InfoRow projectInfoField="About" projectInfoValue={ props.project.description } />

      <img src={ props.project.image } alt={ `${props.project.name} screen capture` } className="w-3/5 max-xl:w-5/6 max-sm:w-11/12" />

      { props.project.frontend && (
        <InfoRow projectInfoField="Frontend" projectInfoValue={ props.project.frontend } />
      )}

      { props.project.backend && (
        <InfoRow projectInfoField="Backend" projectInfoValue={ props.project.backend } />
      )}

      <InfoRow projectInfoField="Tools" projectInfoValue={ props.project.tools } />

      <InfoRow projectInfoField="Status" projectInfoValue={ props.project.finished } />

      <div className="flex w-1/4 max-sm:w-full justify-around mt-5 text-green">
        <Link href={ props.project.url} className="flex flex-col items-center" target="_blank">
          <BiCloudUpload className="text-5xl" />
          Deploy
        </Link>

        <Link href={ props.project.code } className="flex flex-col items-center" target="_blank">
          <BiCodeAlt className="text-5xl" />
          Code
        </Link>
      </div>

      <div className="flex text-green text-6xl mt-5 justify-center">
        <Link href="/projects" className="p-5"><RiArrowLeftCircleLine /></Link>
      </div>
    </div>
  );
}
