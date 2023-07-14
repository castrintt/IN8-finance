/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as LAZY_ROUTES from "./LazyRoutes";
// import ProtectedRoute from "./ProtectedRoute";


const RoutesApp = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<LAZY_ROUTES.Test />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          {/* <Route
            path="/protected-ex"
            element={
              <ProtectedRoute>
                <LAZY_ROUTES.Ex />
              </ProtectedRoute>
            }
          /> */}
          {/* UNAUTHORIZE + NOTFOUND */}
          <Route path="unauthorize" element={<LAZY_ROUTES.Unauthorize />} />
          <Route path="not-found" element={<LAZY_ROUTES.NotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RoutesApp;
