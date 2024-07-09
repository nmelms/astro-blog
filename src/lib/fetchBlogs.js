export async function fetchBlogs() {
  const response = await fetch(`${import.meta.env.CMS_BASE_URL}/api/blogs`);
  const data = await response.json();
  return data;
}
