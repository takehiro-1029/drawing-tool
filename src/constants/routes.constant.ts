import { Params } from "react-router-dom";

export const routePathMap = {
  // INDEX
  index: { path: "/" },

  // DRAW
  draw: { path: "/draw" },

   // DRAW
  show: { path: "/show" },

   // SERVER SENT EVENT
  server_sent_event: { path: "/sse" },

  // WEB SOCKET
  web_socket: { path: "/ws" },

} as const;

export type RoutesName = keyof typeof routePathMap;
