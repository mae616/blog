// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nbchj9res0",
  apiKey: process.env.API_KEY,
});
