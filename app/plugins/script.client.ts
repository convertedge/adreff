import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async () => {
  const { Convertedge } = await import("https://convertedge.cloud");
  new Convertedge("n4HwjhuOT2fW43J38pmjUeCU5Zvg9Nlb");
});
