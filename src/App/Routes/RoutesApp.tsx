/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as LAZY_ROUTES from "./LazyRoutes";
import { Paths } from "./Paths";

const RoutesApp = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="*" element={<Navigate to="/finances" />} />
          <Route path="/" element={<Navigate to="/finances" />} />
          {Paths.map((mappedRoute, index) => (
            <React.Fragment key={index}>
              <Route
                path={mappedRoute.path}
                element={<LAZY_ROUTES.MainRender />}
              />
            </React.Fragment>
          ))}
          <Route path="unauthorize" element={<LAZY_ROUTES.Unauthorize />} />
          <Route path="not-found" element={<LAZY_ROUTES.NotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RoutesApp;
