import { lazy } from "react";

const Unauthorize = lazy(() => import("@pages/Common/Unauthorize/Unauthorize"));
const NotFound = lazy(() => import("@pages/Common/NotFound/NotFound"));
const MainRender = lazy(() => import("@pages/MainRender/MainRender"));

export { Unauthorize, NotFound, MainRender };
