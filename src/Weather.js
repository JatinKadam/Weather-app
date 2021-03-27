import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  head2: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#ccffe6",
    height: 48,
    fontSize: 70,
    padding: "0 30px",
  },
});
const Weather = ({ weather }) => {
  const classes = useStyles();

  return <h1 className={classes.head2}>{weather}</h1>;
};
export default Weather;
