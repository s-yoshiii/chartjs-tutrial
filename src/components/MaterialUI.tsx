import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";
const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "5px 50px",
  },
  typoStyle: {
    color: "blue",
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
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
