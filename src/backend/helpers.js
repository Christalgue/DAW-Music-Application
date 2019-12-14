import { API_LOCATION } from "./apiLocation";

export async function sendPOST(path, data) {
  return await fetch(`${API_LOCATION}${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
}
