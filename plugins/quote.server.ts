import QuoteApiAdapter from "~/services/api/QuoteApiAdapter";

export default defineNuxtPlugin(async (nuxtApp) => {
  const api = new QuoteApiAdapter();
  const quote = await api.getQuoteOfTheDay();
  nuxtApp.provide("quote", quote);
});
