import api from "@utils/axios";
import { TransactionInterface } from "libs/united-sharedbill-core/src/modules/transactions/entities/transaction.interface";
import { TransactionTimelineSection } from "libs/united-sharedbill-core/src/modules/transactions/responses/timeline/transaction-timeline-section";
import { CreateTransaction } from "types/CreateTransaction";

export class TransactionAPI {
  static Keys = {
    findAllByGroup: "TransactionAPI@findAllByGroup",
    save: "TransactionAPI@save",
  };

  static async findAllByGroup({ groupId }: { groupId: string }) {
    const timezone = new Date().getTimezoneOffset();
    return api.get<TransactionTimelineSection[]>(
      `/transactions/group/${groupId}/${timezone}`
    );
  }

  static async save(form: CreateTransaction) {
    return api.post<TransactionInterface>("/transactions", form);
  }
}
