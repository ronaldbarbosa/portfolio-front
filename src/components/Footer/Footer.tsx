import CopyInfo from "./CopyInfo";
import Social from "./Social/Social";

export default function Footer() {
  return(
    <div className="flex max-md:flex-col max-md:items-center px-10 py-5 justify-between text-grey">
      <CopyInfo />
      <Social />
    </div>
  );
}
