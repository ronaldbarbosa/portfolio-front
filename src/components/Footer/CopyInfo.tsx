export default function CopyInfo() {
  const currentYear = new Date().getFullYear();
  return(
    <div>
      <span className="text-lg">&copy; { currentYear } Ronald Barbosa</span>
    </div>
  );
}
