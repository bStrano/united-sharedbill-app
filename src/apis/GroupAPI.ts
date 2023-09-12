import api from '@utils/axios';
import {GroupRegister} from 'types/GroupRegister';

export class GroupAPI {
  static Keys = {
    findAll: 'GroupAPI@findAll',
  };

  static async findAll() {
    return api.get<any>('/groups');
  }

  static async register(groupRegister: GroupRegister) {
    return new Promise(resolve => {
      console.log(groupRegister, 'Group Register');
      resolve(null);
    });
  }
}
