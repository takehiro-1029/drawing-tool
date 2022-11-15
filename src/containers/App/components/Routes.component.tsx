import React, { lazy, Suspense } from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { routePathMap } from "~/constants/routes.constant";

const IndexView = lazy(() => import("~/containers/IndexView/IndexView.container"));
const DrawView = lazy(() => import("~/containers/DrawView/DrawView.container"));
const ShowView = lazy(() => import("~/containers/ShowView/ShowView.container"));

// https://atsu-developer.net/266/
export const Routes: React.FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <ReactRouterRoutes>
      <Route {...routePathMap.index} element={<IndexView />} />
      <Route {...routePathMap.draw} element={<DrawView />} />
      <Route {...routePathMap.show} element={<ShowView />} />
    </ReactRouterRoutes>
  </Suspense>
);
