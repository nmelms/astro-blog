// src/lib/payload.js

export async function fetchPayloadData() {
  const response = await fetch(
    "http://localhost:3000/api/pages/1?locale=undefined&draft=false&depth=1"
  );
  const data = await response.json();
  return data;
}
