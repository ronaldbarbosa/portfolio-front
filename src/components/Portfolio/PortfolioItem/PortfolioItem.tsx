import Link from "next/link";
import { Project, ProjectType } from "../Portfolio";
import { AiOutlineInfoCircle} from "react-icons/ai";

interface PortfolioItemProps {
  project: Project
}

export default function PortfolioItem(props: PortfolioItemProps) {
  return(
    <div className="flex w-1/3 max-lg:w-full flex-col items-center mx-2 my-4 p-2 border-4 border-double border-green rounded-md font-black">
      <div className="flex h-20 mb-2 items-center justify-center">
        <h3 className="text-2xl text-center">{ props.project.name }</h3>
      </div>
      <img src={ props.project?.imgUrl } alt={ props.project.name } className="w-full border rounded-lg text-black brightness-75 hover:brightness-100 max-lg:brightness-100" />
      <div className="flex w-full justify-around mt-3">
        { props.project.projectType === ProjectType.Frontend && (
          <div className="w-1/2 text-center">
            <h2 className="text-green">Frontend</h2>
          </div>
        )
        }
        { props.project.projectType === ProjectType.Backend && (
          <div className="w-1/2 text-center">
            <h2 className="text-green">Backend</h2>
          </div>
        )
        }
      </div>
      <div className="text-3xl my-3">
        <Link className="flex flex-col items-center" href={`/projects/${ props.project.id }`}><span className="p-2 text-lg uppercase">More</span><AiOutlineInfoCircle /></Link>
      </div>
    </div>
  );
}
