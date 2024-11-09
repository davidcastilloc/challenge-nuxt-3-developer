export default abstract class ApiAdapter {
  abstract getQuoteOfTheDay(): Promise<any>;
  abstract getStores(): Promise<any[]>;
}
