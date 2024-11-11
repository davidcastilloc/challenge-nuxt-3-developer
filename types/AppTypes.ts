export interface IStore {
  id: number;
  name: string;
  location: string;
}

export interface IQuoteOfTheDay {
  quote: string;
  author: string;
  fetchedAt: number;
}