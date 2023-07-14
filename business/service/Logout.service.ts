import { ILogoutService } from "./interfaces/Logout.interface";
import { localStorageDeleteCurrentUser } from "../../utils/localStorage";

export class LogoutService implements ILogoutService {
  logout(): void {
    localStorageDeleteCurrentUser();
  }
}
