import CreateFinance from "@pages/CreateFinance/CreateFinance";
import EditFinances from "@pages/EditFinances/EditFinances";
import EditUser from "@pages/EditUser/EditUser";
import Finances from "@pages/Finances/Finances";
import ViewUser from "@pages/ViewUser/ViewUser";

export const Paths = [
  { path: "/home/finances", Component: Finances },
  { path: "/home/edit", Component: EditFinances },
  { path: "/home/edit/:id", Component: EditFinances },
  { path: "/home/create-new", Component: CreateFinance },
  { path: "/home/edit-user", Component: EditUser },
  { path: "/home/view-user", Component: ViewUser },
];
