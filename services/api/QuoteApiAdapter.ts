// src/services/api/QuoteApiAdapter.ts
import ApiAdapter from "./ApiAdapter";

const quoteCache: Record<string, { quote: string; fetchedAt: number }> = {};

export default class QuoteApiAdapter extends ApiAdapter {
  async getQuoteOfTheDay(): Promise<any> {
    const cacheKey = "quote-of-the-day";

    // Verificar si tenemos una cita válida en caché
    const cachedData = this.getCachedQuote(cacheKey);
    if (cachedData) {
      console.log("Loading from cache");
      return cachedData;
    }

    try {
      const endpoint = useRuntimeConfig().public.quoteApiEndpoint || "";
      const token = useRuntimeConfig().quoteSecret || "";
      const data =  await <any>$fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": token,
        }
      });
      console.log("Quote of the day fetched");
      const quoteFetched = {
        ...data[0],
        fetchedAt: Date.now(),
      }
      // Guardar la cita en la memoria caché del servidor
      this.cacheQuote(cacheKey, quoteFetched);
      return quoteFetched || "No quote available";
    } catch (error) {
      console.error("Error fetching quote:", error);
      throw new Error("Failed to fetch quote");
    }
  }

  private getCachedQuote(cacheKey: string) {
    const cachedData = quoteCache[cacheKey];
    if (!cachedData) return null;

    const expirationTime = 24 * 60 * 60 * 1000; // 24 horas en ms
    const isExpired = Date.now() - cachedData.fetchedAt > expirationTime;

    if (isExpired) {
      console.log("Quote of the day expired, refetching...");
      this.clearCache(cacheKey);
      return null;
    }

    return cachedData;
  }

  private cacheQuote(cacheKey: string, data: any) {
    quoteCache[cacheKey] = data;
  }

  private clearCache(cacheKey: string) {
    delete quoteCache[cacheKey];
  }

  async getStores(): Promise<any[]> {
    throw new Error("getStores method not implemented for QuoteApiAdapter");
  }
}
