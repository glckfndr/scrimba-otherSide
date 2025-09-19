import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  const filePath = path.join("data", "data.json");
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.log("Error reading file data.json:", err);
    return [];
  }
}
