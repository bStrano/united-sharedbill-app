import { UserRegister } from "types/UserRegisterInterface";

export class UserAPI {
  static async register(user: UserRegister) {
    return new Promise((resolve) => {
      resolve(null);
    });
  }
}
