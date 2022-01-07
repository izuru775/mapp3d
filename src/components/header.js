import * as React from "react";
import * as mui from "@mui/material";
import { Link } from "react-router-dom";

const Header = (props) => {
  const StyledToolbar = mui.styled(mui.Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }));

  const links = [
    {
      to: "/",
      label: "Link 1",
    },
    {
      to: "/",
      label: "Link 2",
    },
    {
      to: "/",
      label: "Link 3",
    },
    {
      to: "/",
      label: "Link 4",
    },
  ];

  const linkItems = links.map((link, index) => (
    <mui.Grid item key={index}>
      <Link to={link.to} sx={{ textDecoration: "none" }}>
        <mui.Button variant="contained" color="secondary">
          {link.label}
        </mui.Button>
      </Link>
    </mui.Grid>
  ));

  let view = (
    <mui.AppBar>
      <StyledToolbar>
        <mui.Grid container spacing={2}>
          <mui.Grid item xs={3}>
            <mui.Avatar variant="square" sx={{ width: 200, height: 200 }}>
              ICON
            </mui.Avatar>
          </mui.Grid>
          <mui.Grid container item xs={6}>
            <mui.Grid item xs={12} pb={10}>
              <mui.Typography variant="h2">Mapp3D</mui.Typography>
            </mui.Grid>
            <mui.Grid container item xs={12} spacing={1}>
              <mui.Grid item>
                {/* Insert links here */}
              </mui.Grid>
            </mui.Grid>
          </mui.Grid>
          <mui.Grid item xs={3}>
            <mui.Typography variant="h6">Login Form</mui.Typography>
          </mui.Grid>
        </mui.Grid>
      </StyledToolbar>
    </mui.AppBar>
  );

  return view;
};

export default Header;
