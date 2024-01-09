const baseUrl = "http://localhost:8080";

export const getAllUsers = (token) => {
  return fetch(`${baseUrl}/admin/all`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};

export const editUser = (
  id,
  firstName,
  lastName,
  age,
  gender,
  city,
  address,
  education,
  workplace,
  facebook,
  github,
  username,
  email,
  token
) => {
  return fetch(`${baseUrl}/user/editUser`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      id,
      firstName,
      lastName,
      age,
      gender,
      city,
      address,
      education,
      workplace,
      facebook,
      github,
      username,
      email,
    }),
  }).then((res) => res.json());
};

export const getUser = (id, token) => {
  return fetch(`${baseUrl}/user/getUser/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};

export const deleteUser = (id, token) => {
  return fetch(`${baseUrl}/admin/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
