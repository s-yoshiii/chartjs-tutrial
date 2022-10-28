import { Button, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "5px 50px",
  },
});
const MaterialUI: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
