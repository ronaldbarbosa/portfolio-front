import CopyInfo from "./CopyInfo";
import Social from "./Social/Social";

export default function Footer() {
  return(
    <div className="flex px-10 py-5  justify-between text-grey">
      <Social />
      <CopyInfo />
    </div>
  );
}
