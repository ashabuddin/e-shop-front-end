import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWU5MjIxOThlNTNiM2U3YjMzNTU5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDY0OTc3NiwiZXhwIjoxNjM0OTA4OTc2fQ.Ryc_l2Ibnydo5Cn-UiC-ys5-F5CJQcz9X2htQMhoJIQ"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});