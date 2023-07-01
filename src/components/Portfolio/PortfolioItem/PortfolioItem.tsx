import { Project } from "../Portfolio";

interface PortfolioItemProps {
  project: Project
}

export default function PortfolioItem(props: PortfolioItemProps) {
  return(
    <div className="flex w-1/3 max-lg:w-full flex-col items-center mx-2 my-4 p-2 border-4 border-double border-green rounded-md font-black">
      <div className="flex h-20 mb-2 items-center justify-center">
        <h3 className="text-2xl text-center">{ props.project.name }</h3>
      </div>
      <img src={ props.project.image } alt={ props.project.name } className="w-full border rounded-lg text-black brightness-75 hover:brightness-100 max-lg:brightness-100" />
      <div className="flex w-full justify-around mt-3">
        { props.project.frontend && (
          <div className="w-1/2 text-center">
            <h2 className="text-green">Frontend</h2>
            <h3>{ props.project.frontend }</h3>
          </div>
        )
        }
        { props.project.backend && (
          <div className="w-1/2 text-center">
            <h2 className="text-green">Backend</h2>
            <h3>{ props.project.backend }</h3>
          </div>
        )
        }
      </div>
    </div>
  );
}
