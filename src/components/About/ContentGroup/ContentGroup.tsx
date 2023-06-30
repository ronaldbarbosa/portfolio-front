import Description from "./Description";
import Role from "./Role";
import Title from "./Title";

export default function ContentGroup() {
  return(
    <div className="flex flex-col w-2/3 max-lg:w-full mx-5 ml-10 text-white">
      <Role />
      <Title />
      <Description />
    </div>
  );
}
