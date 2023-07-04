import Link from "next/link";
import { BiCloudUpload, BiCodeAlt } from "react-icons/bi";

import { Project } from "../Portfolio/Portfolio";

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

        <div className="flex max-sm:flex-col text-lg mt-2 items-center">
          <span className="text-green mr-2 text-2xl font-black"> &gt; </span>
          <h5 className="mr-2">About the project:</h5>
          <p className="max-sm:text-center">{ props.project.description }</p>
        </div>
      </div>

      <img src={ props.project.image } alt={ `${props.project.name} screen capture` } className="w-3/5 max-xl:w-5/6 max-sm:w-11/12" />

      { props.project.frontend && (
        <div className="flex w-3/5 max-xl:w-5/6 max-sm:w-11/12 max-sm:flex-col text-lg mt-2 items-center">
          <span className="text-green mr-2 text-2xl font-black"> &gt; </span>
          <h5 className="mr-2">Frontend:</h5>
          <p>{ props.project.frontend }</p>
        </div>
      )
      }

      { props.project.backend && (
        <div className="flex w-3/5 max-xl:w-5/6 max-sm:w-11/12 max-sm:flex-col text-lg mt-2 items-center">
          <span className="text-green mr-2 text-2xl font-black"> &gt; </span>
          <h5 className="mr-2">Backend:</h5>
          <p>{ props.project.backend }</p>
        </div>
      )}

      <div className="flex w-3/5 max-xl:w-5/6 max-sm:w-11/12 max-sm:flex-col text-lg mt-2 items-center">
        <span className="text-green mr-2 text-2xl font-black"> &gt; </span>
        <h5 className="mr-2">Tools:</h5>
        <p>{ props.project.tools }</p>
      </div>

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

      <div className="mt-10 bg-grey text-black rounded-md text-2xl hover:bg-green">
        <Link href="/projects" className="p-5">Back</Link>
      </div>
    </div>
  );
}
