import Logo from "./AboutLogo";
import ContentGroup from "./ContentGroup/ContentGroup";

export default function About() {
  return(
    <div className="flex p-5">
      <Logo />
      <ContentGroup />
    </div>
  );
}
