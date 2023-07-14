import { localStorageGetCurrentUser } from "../../utils/localStorage";
import { AuthModel } from "../domain/entities/AuthModel";
import { IAuthService } from "./interfaces/Auth.interface";

export class AuthService implements IAuthService {
  auth(user: AuthModel): boolean {
    const currentUser = localStorageGetCurrentUser();
    if (currentUser) {
      return (
        currentUser.Name === user.Name && currentUser.Password === user.Password
      );
    }
    return false;
  }

  checkIfUserIsAuth(): boolean {
    return !!localStorageGetCurrentUser();
  }
}
