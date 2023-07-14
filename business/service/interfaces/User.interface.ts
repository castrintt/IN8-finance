import { UserModel } from "../../domain/entities/UserModel";

export default interface IUserService {
  createUser(user: UserModel): boolean;
  updateUserName(name: string): boolean;
  deleteUser(): boolean;
  changePassword(password: string): boolean;
}
