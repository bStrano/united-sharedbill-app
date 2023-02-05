import {DebitInterface} from './DebitInterface';
import {GroupCreatorInterface} from './GroupCreatorInterface';

export interface GroupActivityTimelineInterface {
  date: Date;
  debit: DebitInterface;
  creator: GroupCreatorInterface;
  type: 'NEW_EXPENSE' | 'NEW_PAYMENT';
  isUserCreator: boolean;
}
