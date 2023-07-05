import Link from "next/link";
import { RiArrowUpCircleLine } from "react-icons/ri";

export default function BackToTop() {
  return (
    <div className="flex text-green text-6xl mt-5 justify-center">
      <Link href="/projects"><RiArrowUpCircleLine /></Link>
    </div>
  );
}
