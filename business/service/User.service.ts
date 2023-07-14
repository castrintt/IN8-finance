import IUserService from "./interfaces/User.interface";
import { UserModel } from "@entities/UserModel";
import {
  localStorageSetUser,
  localStorageGetCurrentUser,
  localStorageDeleteCurrentUser,
} from "../../utils/localStorage";

export class UserService implements IUserService {
  createUser(user: UserModel): boolean {
    localStorageSetUser(user);
    return !!localStorageGetCurrentUser();
  }

  updateUserName(name: string): boolean {
    const user = localStorageGetCurrentUser();
    if (user) {
      const newUser: UserModel = {
        ...user,
        Name: name,
      };
      localStorageSetUser(newUser);
      return localStorageGetCurrentUser()?.Name === name;
    }
    return false;
  }

  deleteUser(): boolean {
    localStorageDeleteCurrentUser();
    return !!localStorageGetCurrentUser() === false;
  }

  changePassword(password: string): boolean {
    const user = localStorageGetCurrentUser();
    if (user) {
      const newUser: UserModel = {
        ...user,
        Password: password,
      };
      localStorageSetUser(newUser);
      return localStorageGetCurrentUser()?.Password === password;
    }
    return false;
  }
}
