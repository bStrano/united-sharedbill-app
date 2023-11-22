import api from "@utils/axios";
import { TransactionInterface } from "libs/united-sharedbill-core/src/modules/transactions/entities/transaction.interface";

export class TransactionAPI {
  static Keys = {
    findAllByGroup: "TransactionAPI@findAllByGroup",
  };

  static async findAllByGroup({ groupId }: { groupId: string }) {
    return api.get<TransactionInterface[]>(`/transactions/group/${groupId}`);
  }
}
