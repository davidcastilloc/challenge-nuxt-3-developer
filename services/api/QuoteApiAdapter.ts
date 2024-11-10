import ApiAdapter from "./ApiAdapter";

export default class QuoteApiAdapter extends ApiAdapter {
  async getQuoteOfTheDay(): Promise<any> {
    try {
      const endpoint = useRuntimeConfig().public.quoteApiEndpoint || "";
      const token = useRuntimeConfig().quoteSecret || "";
      const data = await <any>$fetch(endpoint, {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": token,
        }
      });
      return data[0] || "No quote available";
    } catch (error) {
      console.error("Error fetching quote:", error);
      throw new Error("Failed to fetch quote");
    }
  }

  async getStores(): Promise<any[]> {
    throw new Error("getStores method not implemented for QuoteApiAdapter");
  }
}
