import { FinanceModel } from "../domain/entities/FinanceModel";
import { IFinanceService } from "./interfaces/IFinanceService";

export class FinanceService implements IFinanceService {
  createNewFinance(newFinance: FinanceModel): boolean {
    throw new Error("Method not implemented.");
  }
  getFinanceById(financeId: string): FinanceModel | null {
    throw new Error("Method not implemented.");
  }
  getActiveFinances(): FinanceModel[] {
    throw new Error("Method not implemented.");
  }
  getDeletedFinances(): FinanceModel[] {
    throw new Error("Method not implemented.");
  }
  editFinance(finance: FinanceModel): boolean {
    throw new Error("Method not implemented.");
  }
  deleteFinance(financeId: string): boolean {
    throw new Error("Method not implemented.");
  }
}
