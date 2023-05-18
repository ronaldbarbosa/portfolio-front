interface SocialItemProps {
  label: string,
  link: string
}

export default function SocialItem(props: SocialItemProps) {
  return (
    <a href={props.link} target="_blank" className="px-5 text-lg hover:text-green">{props.label}</a>
  );
}
