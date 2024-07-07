export async function fetchRemainingBlogs() {
  const response = await fetch(
    "http://localhost:3000/api/blogs?sort=-createdAt&offset=3"
  );
  const data = await response.json();
  return data;
}
