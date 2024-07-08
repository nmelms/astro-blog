export async function fetchRemainingBlogs() {
  const response = await fetch(
    `${import.meta.env.CMS_BASE_URL}/api/blogs?sort[createdAt]=-1&offset=3`
  );
  const data = await response.json();
  return data;
}
