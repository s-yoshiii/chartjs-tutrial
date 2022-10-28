import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";
import React, { FC } from "react";
const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "5px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    backgroundColor: "orange",
    height: 50,
  },
});
const MaterialUI: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
        className={classes.typoStyle}
      >
        Hello UI Hello UIHello UIHello UIHello UIHello UIHello UIHello UIHello
        UIHello UIHello UIHello UI
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=12/md=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=12/md=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6/md=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6/md=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6/md=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6/md=3</Paper>
        </Grid>
      </Grid>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
