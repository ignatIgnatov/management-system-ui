const BASE_URL = "http://localhost:8080/message";

export const getAllMessages = (token) => {
  return fetch(`${BASE_URL}/getAll`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};

export const deleteMessage = (id, token) => {
  return fetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
