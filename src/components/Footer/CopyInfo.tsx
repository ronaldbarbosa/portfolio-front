export default function CopyInfo() {
  const currentYear = new Date().getFullYear();
  return(
    <div className="mt-3">
      <span className="text-lg">&copy; { currentYear } <span className="text-green">Ronald Barbosa</span></span>
    </div>
  );
}
