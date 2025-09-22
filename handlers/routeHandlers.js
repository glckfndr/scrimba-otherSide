import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";

export async function handleGet(res) {
  const data = await getData();
  await sendResponse(res, 200, "application/json", JSON.stringify(data));
}

export async function handlePost(req, res) {
  const rawBody = await parseJSONBody(req);
  console.log(rawBody);
  return rawBody;
}
