import { IsOptional, IsString } from "class-validator";
import { MESSAGES } from "@constants/messages-ids";
import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import { CreateGroupDto } from "libs/united-sharedbill-core/src/modules/groups/dtos/create-group.dto";

export class GroupRegister implements CreateGroupDto {
  @IsString({ message: MESSAGES.ids.ERROR_INVALID_NAME })
  title: string;

  @IsOptional()
  icon: IconsEnum;

  @IsString({ message: MESSAGES.ids.ERROR_INVALID_DESCRIPTION })
  description: string;
}
