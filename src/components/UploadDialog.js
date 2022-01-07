import * as React from "react";
import * as mui from "@mui/material";

const UploadDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let dialog = (
    <>
      <mui.Button variant="contained" onClick={handleOpen}>
        Upload
      </mui.Button>

      <mui.Dialog open={open} onClose={handleClose}>
        <mui.DialogTitle>
          <mui.Typography variant="h1">3D Object</mui.Typography>
        </mui.DialogTitle>
        <mui.DialogContent dividers>
          <mui.Grid container>
            <mui.Grid item xs={4}>
              <mui.Avatar variant="square" sx={{ width: 100, height: 100 }}>
                ICON
              </mui.Avatar>
            </mui.Grid>
            <mui.Grid item xs={8}>
              <mui.DialogContentText>Model Name</mui.DialogContentText>
              <mui.TextField variant="outlined" />
              <mui.Button variant="contained">Upload Model</mui.Button>
            </mui.Grid>
          </mui.Grid>
        </mui.DialogContent>
        <mui.DialogContent dividers>
          <mui.Grid container>
            <mui.Grid container item xs={12}>
              <mui.Grid item xs={3}>
                Position
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>X Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>Y Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>Z Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
            </mui.Grid>
            <mui.Grid container item xs={12}>
              <mui.Grid item xs={3}>
                Scale
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>X Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>Y Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>Z Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
            </mui.Grid>
            <mui.Grid container item xs={12}>
              <mui.Grid item xs={3}>
                Rotation
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>X Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>Y Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
              <mui.Grid item xs={3}>
                <mui.DialogContentText>Z Coordinates</mui.DialogContentText>
                <mui.TextField variant="outlined" />
              </mui.Grid>
            </mui.Grid>
          </mui.Grid>
        </mui.DialogContent>
        <mui.DialogActions>
          <mui.Button onClick={handleClose}>Cancel</mui.Button>
          {/* Create function to handle saving with backend */}
          <mui.Button onClick={handleClose}>Save</mui.Button>
        </mui.DialogActions>
      </mui.Dialog>
    </>
  );

  return dialog;
};

export default UploadDialog;
