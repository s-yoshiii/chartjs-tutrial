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
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8}>
            Demo
          </Grid>
          <Grid item xs={2}>
            Test
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="space-around">
        <Grid item xs={3}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Grid>
        <Grid item xs={3}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Grid>
        <Grid item xs={3}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
