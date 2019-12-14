import { API_LOCATION } from "./apiLocation";

export const sendPOST = (path, data, callback) => {
  fetch(`${API_LOCATION}${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(response => {
    if (callback) callback(response);
  });
};
