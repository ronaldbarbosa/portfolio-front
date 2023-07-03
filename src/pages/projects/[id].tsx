import { useRouter } from "next/router";

export default function ProjectDetails(){
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>

  return (
    <div>
      <h2>{ id }</h2>
    </div>
  )
}
