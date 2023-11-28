import { IsEmail, IsString, IsStrongPassword, Validate } from "class-validator";
import { MatchPasswords } from "../decorators/ConfirmPasswordValidator";
import { MESSAGES } from "@constants/messages-ids";
export class UserRegister {
  @IsString({ message: MESSAGES.ids.ERROR_INVALID_NAME })
  name: string;

  @IsEmail({}, { message: MESSAGES.ids.ERROR_INVALID_EMAIL })
  email: string;

  @IsStrongPassword(
    { minLength: 8 },
    { message: MESSAGES.ids.ERROR_INVALID_PASSWORD }
  )
  password: string;

  @Validate(MatchPasswords, ["password"], {
    message: MESSAGES.ids.ERROR_INVALID_CONFIRM_PASSWORD,
  })
  confirmPassword: string;
}
