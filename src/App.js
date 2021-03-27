import axios from "axios";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Weather from "./Weather";
import "./styles.css";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import PublicIcon from "@material-ui/icons/Public";
const useStyles = makeStyles({
  icon: {
    border: 0,

    color: "Green",

    fontSize: 60,
  },
});

const App = () => {
  const classes = useStyles();
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [allData, setAllData] = useState([]);
  async function getData() {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8b3157a899aba8ad00eb58b05beb36c3`
      );
      console.log(data.main.temp);
      setWeather(`${data.main.temp} degree C`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  let buttonStyle = {
    height: 55,
  };

  return (
    <div className="weatherApp">
      <h1 className="head">
        Weather Report <PublicIcon className={classes.icon} />
      </h1>

      <TextField
        onChange={(e) => setCity(e.target.value)}
        value={city}
        id="filled-basic"
        label="City Name"
        variant="outlined"
      />
      <Button
        style={buttonStyle}
        Type="submit"
        onClick={getData}
        variant="outlined"
        color="yellow"
      >
        <LocationSearchingIcon />
      </Button>
      <Weather weather={weather} />
    </div>
  );
};
export default App;
