import { lazy } from "react";

const Unauthorize = lazy(() => import("@pages/Common/Unauthorize/Unauthorize"));
const NotFound = lazy(() => import("@pages/Common/NotFound/NotFound"));
const Login = lazy(() => import("@pages/Login/Login"));
const Register = lazy(() => import("@pages/Register/Register"));
const Home = lazy(() => import("@pages/Home/Home"));

export { Unauthorize, NotFound, Login, Register, Home };
