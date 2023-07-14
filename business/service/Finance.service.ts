import {
  localStorageGetCurrentUser,
  localStorageSetUser,
} from "../../utils/localStorage";
import { FinanceModel } from "../domain/entities/FinanceModel";
import { UserModel } from "../domain/entities/UserModel";
import { IFinanceService } from "./interfaces/Finance.interface";

export class FinanceService implements IFinanceService {
  createNewFinance(newFinance: FinanceModel): boolean {
    const user = localStorageGetCurrentUser();
    if (user) {
      const newFinanceList: UserModel = {
        ...user,
        Finances: [...user.Finances, newFinance],
      };
      localStorageSetUser(newFinanceList);
      return true;
    }
    return false;
  }
  getFinanceById(financeId: string): FinanceModel | null {
    const users = localStorageGetCurrentUser();
    if (users) {
      const selectedFinance = users.Finances.filter(
        (values) => values.Id === financeId
      )[0];
      return selectedFinance;
    }
    return null;
  }
  getFinancesByUser(): FinanceModel[] {
    const users = localStorageGetCurrentUser();
    if (users) {
      return users.Finances ?? [];
    }
    return [];
  }
  getActiveFinances(): FinanceModel[] {
    const users = localStorageGetCurrentUser();
    if (users) {
      const activeFinances = users.Finances.filter(
        (values: FinanceModel) => values.DeletedAt === null
      );
      return activeFinances ?? [];
    }
    return [];
  }
  getDeletedFinances(): FinanceModel[] {
    const users = localStorageGetCurrentUser();
    if (users) {
      const deletedFinances = users.Finances.filter(
        (values) => values.DeletedAt !== null
      );
      return deletedFinances ?? [];
    }
    return [];
  }
  editFinance(finance: FinanceModel): boolean {
    const user = localStorageGetCurrentUser();
    if (user) {
      const editFinances: FinanceModel[] = user.Finances.map((values) => {
        if (values.Id === finance.Id) {
          return {
            ...values,
            Name: finance.Name,
            Value: finance.Value,
            UpdatedAt: new Date(),
          };
        }
        return values;
      });
      const newUser: UserModel = {
        ...user,
        Finances: editFinances,
      };
      localStorageSetUser(newUser);
      return true;
    }
    return false;
  }
  deleteFinance(financeId: string): boolean {
    const user = localStorageGetCurrentUser();
    if (user) {
      const userFinances: FinanceModel[] = user.Finances.filter(
        (values) => values.Id !== financeId
      );
      const newUser: UserModel = {
        ...user,
        Finances: userFinances,
      };
      localStorageSetUser(newUser);
      return true;
    }
    return false;
  }
}
