export async function fetchRecentBlogs() {
  const response = await fetch(
    "http://localhost:3000/api/blogs?sort[createdAt]=-1&limit=3"
  );
  const data = await response.json();
  return data;
}
