import ApiAdapter from "./ApiAdapter";

export default class StoreApiAdapter extends ApiAdapter {
  async getStores(): Promise<any[]> {
    try {
      const endpoint = useRuntimeConfig().public.storeApiEndpoint || "";
      const response = await $fetch(endpoint); // Endpoint local para obtener tiendas
      return response;
    } catch (error) {
      console.error("Error fetching stores:", error);
      throw new Error("Failed to fetch stores");
    }
  }

  async getQuoteOfTheDay(): Promise<string> {
    throw new Error(
      "getQuoteOfTheDay method not implemented for StoreApiAdapter"
    );
  }
}
