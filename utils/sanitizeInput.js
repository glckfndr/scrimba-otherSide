import sanitizeHtml from "sanitize-html";

export function sanitizeInput(body) {
  for (const key in body) {
    if (typeof body[key] === "string")
      body[key] = sanitizeHtml(body[key], { allowedTags: ["b"] });
  }

  return body;
}
