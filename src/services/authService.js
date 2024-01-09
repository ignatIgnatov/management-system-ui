const baseUrl = "http://localhost:8080/auth";

export const login = async (email, password) => {
  let res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let jsonResult = await res.json();

  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult.message;
  }
};

// export const getUser = () => {
//   let username = localStorage.getItem("username");

//   return username;
// };

// export const isAuthenticated = () => {
//   return Boolean(getUser());
// };

export const logout = () => {
  return fetch(`${baseUrl}/logout`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
  });
};

export const register = (firstName, lastName, username, email, password, confirmPassword) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, username, email, password, confirmPassword }),
  }).then((res) => res.json());
};
