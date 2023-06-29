import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface SocialItemProps {
  label: string,
  link: string,
  icon: string
}

export default function SocialItem(props: SocialItemProps) {
  if (props.icon == 'AiFillGithub')
    return (
      <a href={props.link} target="_blank" className="px-3 text-5xl hover:text-green"><AiFillGithub /></a>
    );
  else if (props.icon == 'AiFillLinkedin')
    return (
      <a href={props.link} target="_blank" className="px-3 text-5xl hover:text-green"><AiFillLinkedin /></a>
    );
  else
    return (
      <a href={props.link} target="_blank" className="px-5 text-lg hover:text-green">{props.label}</a>
    );
}
