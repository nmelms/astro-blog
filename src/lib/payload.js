// src/lib/payload.js

export async function fetchPayloadData() {
  const response = await fetch(
    "http://localhost:3000/api/pages?where[name][equals]=Homepage"
  );
  const data = await response.json();
  return data.docs[0];
}
