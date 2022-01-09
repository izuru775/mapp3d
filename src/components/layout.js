import * as React from "react";
import * as mui from "@mui/material";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

const Layout = () => {

  const myStyle = {
    color: "white",
    background: "#000000",
    marginTop: 20,
    marginLeft: 20
  };
  
  let view = (
    <Grid container style={{background: "#B8860B"}}>

      <Grid item xs={12} container>
        <Grid item xs={2}>
          <Avatar variant="square" sx={{ width: 150, height: 150}} style={myStyle}>
            ICON
          </Avatar>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2" style={{textAlign:"center", marginTop: 40}}>
          Mapp3D
          </Typography>
        </Grid>
        <Grid item xs={4}  >
          <TextField size="small" defaultValue="Text" style={{width:"25%",  marginTop: 25, marginLeft: 20}} />
          <TextField size="small" defaultValue="*******" style={{width:"25%",  marginTop: 25, marginLeft: 20}} />
        </Grid>
        <Grid item container xs={1}  direction="column">
          <Button variant="contained" style={myStyle}>Login</Button>
          <Button variant="contained" style={myStyle}>Signup</Button>
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" style={myStyle}>Home</Button>
        <Button variant="contained" style={myStyle}>My Environments</Button>
        <Button variant="contained" style={myStyle}>Create Environment</Button>
        <Button variant="contained" style={myStyle}>About</Button>
        </Grid>
        <Toolbar />
      </Grid>

      <Grid item container xs={3} style={{border:"solid"}} direction="column" >
        <Link href="# " style={{ marginTop: 40, color: "white" }}>3D Models</Link>
        <Link href="#" style={{ marginTop: 40, color: "white" }}>3D Environments</Link>
        <Link href="#" style={{ marginTop: 40, color: "white" }}>Cart</Link>
        <Toolbar />
      </Grid>
      
      <Grid item xs={9} style={{border:"solid"}} ></Grid>

      <Grid item xs={12} style={{ border: "solid" }} >
      <Toolbar />
        <Link href="# " style={{ marginLeft: 70, color: "white" }}>Home</Link>
        <Link href="#" style={{ marginLeft: 70, color: "white" }}>VR Environments</Link>
        <Link href="#" style={{ marginLeft: 70, color: "white" }}>Create Environment</Link>
        <Link href="#" style={{ marginLeft: 70, color: "white" }}>About</Link>
        <Toolbar />
      </Grid>

    </Grid>
  );

  return view;
};

export default Layout;
