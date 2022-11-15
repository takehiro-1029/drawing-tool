import { setupWorker } from "msw";
import { dogImageApiHandlers } from "./dogImageApiMock.infra";

const handlers = [
  ...dogImageApiHandlers,
];

export const apiMockWorker = setupWorker(...handlers);
