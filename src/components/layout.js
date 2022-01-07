import * as React from "react";
import * as mui from "@mui/material";

const Layout = () => {
  let view = (
    <mui.Grid container spacing={1}>
      <mui.Grid item xs={12} sx={{ border: "solid" }}>
        <mui.Box>
          <mui.Typography variant="h1">Header</mui.Typography>
        </mui.Box>
      </mui.Grid>
      <mui.Grid container item spacing={1} xs={12} sx={{ border: "solid" }}>
        <mui.Grid item xs={4} sx={{ border: "dashed" }}>
          <mui.Box>
            <mui.Typography variant="h2">Side Menu</mui.Typography>
          </mui.Box>
        </mui.Grid>
        <mui.Grid item xs={8} sx={{ border: "dashed" }}>
          <mui.Box>
            <mui.Typography variant="h2">Main Content</mui.Typography>
          </mui.Box>
        </mui.Grid>
      </mui.Grid>
      <mui.Grid item xs={12} sx={{ border: "solid" }}>
        <mui.Box>
          <mui.Typography variant="h1">Footer</mui.Typography>
        </mui.Box>
      </mui.Grid>
    </mui.Grid>
  );

  return view;
};

export default Layout;
