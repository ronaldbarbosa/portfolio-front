export default function CopyInfo() {
  const currentYear = new Date().getFullYear();
  return(
    <div>
      <span className="text-lg">&copy; { currentYear } <span className="text-green">Ronald Barbosa</span></span>
    </div>
  );
}
