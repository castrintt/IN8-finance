/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as LAZY_ROUTES from "./LazyRoutes";
import ProtectedRoute from "./ProtectedRoute";
import { Paths } from "./Paths";

const RoutesApp = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<LAZY_ROUTES.Login />} />
          <Route path="/register" element={<LAZY_ROUTES.Register />} />

          {/* PRIVATE */}
          {Paths.map((mappedRoute, index) => (
            <React.Fragment key={index}>
              <Route
                path={mappedRoute.path}
                element={
                  <ProtectedRoute>
                    <LAZY_ROUTES.Home />
                  </ProtectedRoute>
                }
              />
            </React.Fragment>
          ))}
          {/* UNAUTHORIZE / NOTFOUND */}
          <Route path="unauthorize" element={<LAZY_ROUTES.Unauthorize />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="not-found" element={<LAZY_ROUTES.NotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RoutesApp;
