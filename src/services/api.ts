const baseUrl = "https://portfolio-ronald.azurewebsites.net/api/";

export async function fetchProjects() {
  const url = `${baseUrl}/Project`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function fetchProjectById(id: string | string[] | undefined) {
  const url = `${baseUrl}/Project/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
