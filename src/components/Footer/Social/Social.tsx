import SocialItem from "./SocialItem";

export default function Social() {
  return(
    <div className="flex">
      <SocialItem label="Linkedin" link="https://www.linkedin.com/in/ronald-barbosa/" icon="AiFillLinkedin" />
      <SocialItem label="GitHub" link="https://github.com/ronaldbarbosa" icon="AiFillGithub" />
    </div>
  );
}
