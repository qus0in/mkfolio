import ky from "ky";

const client = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL ?? "http://localhost:8787",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
