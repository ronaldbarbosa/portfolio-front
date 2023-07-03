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
        <div className="flex text-lg mt-2 items-center">
          <span className="text-green mr-2 text-2xl font-black"> &gt; </span>
          <h5 className="mr-2">About the project:</h5>
          <p>{ props.project.description }</p>
        </div>
      </div>
      <img src={ props.project.image } alt={ `${props.project.name} screen capture` } className="w-3/5 max-xl:w-5/6 max-sm:w-11/12" />
      <div className="flex w-2/4 text-lg mt-2 items-center">
        <span className="text-green mr-2 text-2xl font-black"></span>
        <h5></h5>
      </div>
    </div>
  );
}
