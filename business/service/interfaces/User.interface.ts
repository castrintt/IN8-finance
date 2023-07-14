import { UserModel } from "../../domain/entities/UserModel";

export default interface IUserService {
  createUser(user: UserModel): boolean;
  updateUser(user: UserModel): boolean;
  deleteUser(name: string): boolean;
  getUser(name: string): UserModel;
}
