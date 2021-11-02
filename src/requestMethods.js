// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });

 import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWU5MjIxOThlNTNiM2U3YjMzNTU5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTU3MjE5MSwiZXhwIjoxNjM1ODMxMzkxfQ.kS4POLj0Lf2XFvGSE-kMFpGbRe3V6ovwuigXaeRLFb4"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});