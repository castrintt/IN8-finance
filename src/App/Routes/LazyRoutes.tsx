import { lazy } from "react";

const Unauthorize = lazy(
  () => import("../Pages/Common/Unauthorize/Unauthorize")
);
const NotFound = lazy(() => import("../Pages/Common/NotFound/NotFound"));
const Test = lazy(() => import("../Pages/Test/Test"));

export { Unauthorize, NotFound, Test };
