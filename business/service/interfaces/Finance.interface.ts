import { FinanceModel } from "../../domain/entities/FinanceModel";

export interface IFinanceService {
  createNewFinance(newFinance: FinanceModel): boolean;
  getFinanceById(financeId: string): FinanceModel | null;
  getFinancesByUser(): FinanceModel[];
  getActiveFinances(): FinanceModel[];
  getDeletedFinances(): FinanceModel[];
  editFinance(finance: FinanceModel): boolean;
  deleteFinance(financeId: string): boolean;
}
