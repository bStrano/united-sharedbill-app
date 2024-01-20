import api from "@utils/axios";
import { TransactionTimelineSection } from "libs/united-sharedbill-core/src/modules/transactions/responses/timeline/transaction-timeline-section";

export class TransactionAPI {
  static Keys = {
    findAllByGroup: "TransactionAPI@findAllByGroup",
  };

  static async findAllByGroup({ groupId }: { groupId: string }) {
    const timezone = new Date().getTimezoneOffset();
    return api.get<TransactionTimelineSection[]>(
      `/transactions/group/${groupId}/${timezone}`
    );
  }
}
