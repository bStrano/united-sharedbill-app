import api from "@utils/axios";
import { GroupInterface } from "libs/united-sharedbill-core/src/modules/groups/entities/group.interface";
import { GroupRegister } from "types/GroupRegister";

export class GroupAPI {
  static Keys = {
    findAll: "GroupAPI@findAll",
  };

  static async findAll() {
    return api.get<GroupInterface[]>("/groups");
  }

  static async register(groupRegister: GroupRegister) {
    return new Promise((resolve) => {
      resolve(null);
    });
  }
}
