const baseUrl = "https://projects-ms-b9ckfucabgdwgudc.brazilsouth-01.azurewebsites.net";

export async function fetchProjects() {
  const url = `${baseUrl}/projects`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function fetchProjectById(id: string | string[] | undefined) {
  const url = `${baseUrl}/projects/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
