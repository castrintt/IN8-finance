import CreateFinance from "@pages/CreateFinance/CreateFinance";
import EditFinances from "@pages/EditFinances/EditFinances";
import Finances from "@pages/Finances/Finances";
import Graphics from "@pages/Graphics/Graphics";
import Reports from "@pages/Reports/Reports";

export const Paths = [
  { path: "/finances", Component: Finances },
  { path: "/create", Component: CreateFinance },
  { path: "/edit", Component: EditFinances },
  { path: "/edit/:id", Component: EditFinances },
  { path: "/graphics", Component: Graphics },
  { path: "/reports", Component: Reports },
];
