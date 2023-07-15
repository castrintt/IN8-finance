import { UserModel } from "../business/domain/entities/UserModel";
import { encryptData, decryptData } from "./crypto";

export const localStorageSetUser = (user: UserModel) => {
  localStorage.setItem("current-user", encryptData(user));
};

export const localStorageGetCurrentUser = (): UserModel | null => {
  const currentUser = localStorage.getItem("current-user");
  if (currentUser) {
    const user: UserModel = decryptData(currentUser);
    return user;
  }
  return null;
};

export const localStorageDeleteCurrentUser = () => {
  localStorage.removeItem("current-user");
};
