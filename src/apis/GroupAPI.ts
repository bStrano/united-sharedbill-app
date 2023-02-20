import {GroupRegister} from 'types/GroupRegister';

export class GroupAPI {
  static async register(groupRegister: GroupRegister) {
    return new Promise(resolve => {
      console.log(groupRegister, 'Group Register');
      resolve(null);
    });
  }
}
