import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";

export async function handleGet(res) {
  const data = await getData();
  await sendResponse(res, 200, "application/json", JSON.stringify(data));
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    await addNewSighting(parsedBody);
    await sendResponse(
      res,
      201,
      "application/json",
      JSON.stringify(parsedBody)
    );
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
