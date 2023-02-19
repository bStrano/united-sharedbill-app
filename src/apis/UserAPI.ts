import {UserRegisterInterface} from 'types/UserRegisterInterface';

export class UserAPI {
  static async register(user: UserRegisterInterface) {
    return new Promise(resolve => {
      console.log(user, 'Register User');
      resolve(null);
    });
  }
}
