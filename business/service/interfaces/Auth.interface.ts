import { AuthModel } from "./../../domain/entities/AuthModel";
export interface IAuthService {
  auth(user: AuthModel): boolean;
  checkIfUserIsAuth(): boolean;
}
