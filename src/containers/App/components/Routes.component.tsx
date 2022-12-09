import React, { lazy, Suspense } from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { routePathMap } from "~/constants/routes.constant";

const IndexView = lazy(() => import("~/containers/IndexView/IndexView.container"));
const DrawView = lazy(() => import("~/containers/DrawView/DrawView.container"));
const ShowView = lazy(() => import("~/containers/ShowView/ShowView.container"));
const ServerSentEventView = lazy(() => import("~/containers/ServerSentEventView/ServerSentEventView.container"));
const WebSocketView = lazy(() => import("~/containers/WebSocketView/WebSocketView.container"));

// https://atsu-developer.net/266/
export const Routes: React.FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <ReactRouterRoutes>
      <Route {...routePathMap.index} element={<IndexView />} />
      <Route {...routePathMap.draw} element={<DrawView />} />
      <Route {...routePathMap.show} element={<ShowView />} />
      <Route {...routePathMap.server_sent_event} element={<ServerSentEventView />} />
      <Route {...routePathMap.web_socket} element={<WebSocketView />} />
    </ReactRouterRoutes>
  </Suspense>
);
