import React from "react";
import { ButtonProps, Button } from "@mui/material";

// TODO: ここcomponentタイプエラーをどう解決する？
export type MuiButtonProps = Omit<ButtonProps, "type"> & { component?: React.ElementType } & {
  type?: ButtonProps["type"] | "link";
};

export const MuiButton: React.FC<MuiButtonProps> = (props) => (
  // @ts-ignore
  <Button {...props} />
);
