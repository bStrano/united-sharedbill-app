import { MESSAGES } from "@constants/messages-ids";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { ParticipantAmountInterface } from "libs/united-sharedbill-core/src/modules/transactions/dtos/create-transaction.dto.interface";
import { TransactionTypeEnum } from "libs/united-sharedbill-core/src/modules/transactions/enums/transaction-type.enum";
import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";

class TransactionParticipant implements ParticipantAmountInterface {
  @IsNumber()
  value: number;

  @IsString()
  participantId: string;
}

// export class CreateTransaction implements CreateTransactionDtoInterface {
export class CreateTransaction {
  @IsString({ message: MESSAGES.ids.ERROR_TRANSACTION_INVALID_TITLE })
  title: string;

  @IsString({ message: MESSAGES.ids.ERROR_TRANSACTION_INVALID_DESCRIPTION })
  description: string;

  @IsString()
  total: string;

  // @IsString()
  // groupId: string;

  // @IsArray()
  // @IsObject({ each: true })
  // @ValidateNested({ each: true })
  // @IsNotEmpty()
  // owners: TransactionParticipant[];

  // @IsArray()
  // @IsObject({ each: true })
  // @ValidateNested({ each: true })
  // @IsNotEmpty()
  // debtors: TransactionParticipant[];

  @IsEnum(TransactionTypeEnum)
  transactionType: TransactionTypeEnum;

  @IsEnum(IconsEnum)
  icon: IconsEnum;
}
