import { Grid } from "@mui/material";
import React from "react";

export const BasicLayout = ({ children }) => {
  return <Grid style={{ padding: "5vh 5vh" }}>{children}</Grid>;
};
