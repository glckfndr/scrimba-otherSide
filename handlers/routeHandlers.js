import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(res, 200, "application/json", content);
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    const body = sanitizeInput(parsedBody);
    await addNewSighting(body);
    sendResponse(res, 201, "application/json", JSON.stringify(parsedBody));
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
