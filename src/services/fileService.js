const baseUrl = "http://localhost:8080";

export const uploadPicture = (file, id, token) => {
  return fetch(`${baseUrl}/cloudinary/upload/${id}`,
  {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: file,
  });
};

export const getPicture = (id, token) => {
  return fetch(`${baseUrl}/cloudinary/get/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};



