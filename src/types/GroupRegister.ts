import {IsOptional, IsString} from 'class-validator';
import {MESSAGES} from '@constants/messages-ids';

export class GroupRegister {
  @IsString({message: MESSAGES.ids.ERROR_INVALID_NAME})
  name: string;
  image: string;
}
