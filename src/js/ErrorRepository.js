export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, "Not Found"],
      [500, "Internal Server Error"],
      [502, "Bad Gateway"],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error("Unknown error");
    } else {
      return this.errors.get(code);
    }
  }
}
