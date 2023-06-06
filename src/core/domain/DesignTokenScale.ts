import { DesignToken } from "./DesignToken";

export class DesignTokenScale {
  private tokens: DesignToken[] = [];

  constructor(public name: string) {}

  public addToken(token: DesignToken) {
    this.tokens.push(token);
  }

  public getTokens() {
    return this.tokens.slice(0);
  }
}
