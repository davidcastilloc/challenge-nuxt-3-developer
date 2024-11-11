import { useAsyncData } from "nuxt/app";
import type { IQuoteOfTheDay } from "~/types/AppTypes";

export const useQuoteOfTheDay = async () => {
  // get quote from server 24h cache
  console.log("useQuoteOfTheDay");
  return await useAsyncData("quote-of-the-day", () => $fetch("/api/quote"), {
    transform: (input: IQuoteOfTheDay) => ({
      ...input,
      fetchedAt: Date.now(),
    }),
    getCachedData: (key, nuxtApp) => {
      const quoteCached = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      console.log("quote cached", quoteCached);

      // Check if the quote is cached
      if (!quoteCached) {
        console.log("no quote cached");
        return;
      }
      // Check if the quote is expired
      const DAY = 24 * 60 * 60 * 1000; // 24 hours in ms
      const expiration = new Date(quoteCached.fetchedAt);
      expiration.setTime(expiration.getTime() + DAY);
      const isExpired = expiration.getTime() < Date.now();

      // If the quote is expired, return undefined
      if (isExpired) {
        console.log("expired quote");
        return;
      }
      return quoteCached;
    },
  });
};
