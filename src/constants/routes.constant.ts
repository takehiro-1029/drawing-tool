import { Params } from "react-router-dom";

export const routePathMap = {
  // INDEX
  index: { path: "/" },

  // DRAW
  draw: { path: "/draw" },

   // DRAW
  show: { path: "/show" },

} as const;

export type RoutesName = keyof typeof routePathMap;
