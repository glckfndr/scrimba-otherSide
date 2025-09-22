import { getData } from "./getData.js";
import fs from "node:fs/promises";
import path from "node:path";

export async function addNewSighting(newSighting) {
  try {
    const data = await getData();
    data.push(newSighting);
    const pathJSON = path.join("data", "data.json");
    await fs.writeFile(pathJSON, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    throw new Error(`Can not write new sighting in data.json: ${err}`);
  }
}
