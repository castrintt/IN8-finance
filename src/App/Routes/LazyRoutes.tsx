import { lazy } from "react";

const Unauthorize = lazy(() => import("@pages/Common/Unauthorize/Unauthorize"));
const NotFound = lazy(() => import("@pages/Common/NotFound/NotFound"));
const Test = lazy(() => import("@pages/Test/Test"));

export { Unauthorize, NotFound, Test };
