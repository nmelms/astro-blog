export async function fetchRecentBlogs() {
  const response = await fetch(
    `${import.meta.env.CMS_BASE_URL}/api/blogs?sort[createdAt]=-1`
  );
  const data = await response.json();
  return data;
}
