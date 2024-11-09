export default abstract class ApiAdapter {
  abstract getQuoteOfTheDay(): Promise<string>;
  abstract getStores(): Promise<any[]>;
}
