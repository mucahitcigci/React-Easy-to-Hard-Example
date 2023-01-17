import React, { useState } from "react";

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemperature);
  };
  return (
    <div className="row">
      <div className="col-sm subject">
        {" "}
        <h5>Summary</h5>
        <p>
          {" "}
          You will build a temperature control app where users can
          increment/decrement temperature and the background color changes based
          on temperature.{" "}
        </p>
        <h5>Topics covered</h5>
        <p>React basics like Hooks, components, useState().</p>
      </div>
      <div className="col-sm ">
        <div className="app-container">
          <div className="temperature-display-container">
            <div className={`temperature-display ${temperatureColor}`}>
              {temperatureValue}°C{" "}
            </div>
          </div>
          <div className="button-container">
            <button className="counter" onClick={() => increaseTemperature()}>
              +
            </button>
            <button className="counter" onClick={() => decreaseTemperature()}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
