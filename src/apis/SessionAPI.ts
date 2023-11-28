import axios from 'axios';
import { HOST_API_KEY } from "@constants/config";
import {
  RefreshSessionReturnInterface
} from "../../libs/united-sharedbill-core/src/modules/auth/returns/refresh-session-return.interface";

export class SessionAPI {

  static async loginWithGoogle(token: string) {
    const { data } = await axios<RefreshSessionReturnInterface>(`${HOST_API_KEY}/auth/google`, {
      method: 'POST',
      data: {
        token,
      },
    });
    return data;
  }

  static async restoreSession(refreshToken: string) {
    const {  data } = await axios<RefreshSessionReturnInterface>(`${HOST_API_KEY}/session`, {
      method: 'PATCH',
      data: {
        refreshToken,
      },
    });
    return data;
  }

  static async logout(refreshToken: string) {
    await axios(`${HOST_API_KEY}/session`, {
      method: 'DELETE',
      data: {
        refreshToken,
      },
    });
  }

  static async loginWithInternal(username: string, password: string) {
    const { data } = await axios<RefreshSessionReturnInterface>(`${HOST_API_KEY}/auth/internal`, {
      method: 'POST',
      data: {
        username,
        password,
      },
    });
    return data;
  }
}
