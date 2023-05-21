import { Project } from "../Portfolio";

interface PortfolioItemProps {
  project: Project
}

export default function PortfolioItem(props: PortfolioItemProps) {
  return(
    <div className="flex flex-col items-center my-5">
      <div className="flex mb-3 w-2/3 h-20 items-center justify-center">
        <h3 className="text-1xl">{ props.project.name }</h3>
      </div>
      <img src={ props.project.image } alt={ props.project.name } className="w-2/3 border rounded-lg text-black" />
    </div>
  );
}
