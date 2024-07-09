// src/lib/payload.js

export async function fetchPayloadData() {
  const response = await fetch(
    `${import.meta.env.CMS_BASE_URL}/api/pages?where[name][equals]=Homepage`
  );
  const data = await response.json();
  return data.docs[0];
}
