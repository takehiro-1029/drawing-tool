import { SizeModel } from "../models/Size.model";

export const IMAGE_MAIN_SIZE = {
  type1: { width: 500, height: 500 } as const,
};

export const IMAGE_CANVAS_SIZE = new SizeModel(IMAGE_MAIN_SIZE.type1).value();