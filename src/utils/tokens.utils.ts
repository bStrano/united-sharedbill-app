import { Buffer } from 'buffer';

export class TokensUtils {
  static decodeBase64(base64: string) {
    return Buffer.from(base64, 'base64').toString('ascii');
  };

  static isTokenExpired(token: string) {
    const base64Url = token.split('.')[1];
    const decodedValue = this.decodeBase64(base64Url);
    const expiry = JSON.parse(decodedValue).exp;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const tolerance = 2;
    return currentTimeInSeconds - tolerance >= expiry;
  };
}
