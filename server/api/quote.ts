import QuoteApiAdapter from "~/services/api/QuoteApiAdapter";

export default defineEventHandler(async (event) => {
  const api = new QuoteApiAdapter();
  const quote = await api.getQuoteOfTheDay();
  return quote
})
