import { lazy } from "react";

const Unauthorize = lazy(() => import("@pages/Common/Unauthorize/Unauthorize"));
const NotFound = lazy(() => import("@pages/Common/NotFound/NotFound"));
const Login = lazy(() => import("@pages/Login/Login"));

export { Unauthorize, NotFound, Login };
