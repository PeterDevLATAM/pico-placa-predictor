import "./form.style.scss";

import { useState } from "react";

import React from "react";
import Btn from "./btn.component";
import { useConsult } from "../hooks/useConsult";

export default function Form() {
  const [plate, setPlate] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const {queryData } = useConsult();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateObject = new Date(`${date}T${time}:00`);
    //Call to action
    queryData(plate, dateObject);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="inputs">
        <label className="inputs__label ">
          <p className="inputs__text">Plate</p>
          <input
            type="text"
            placeholder="AAA######"
            className="inputs__input inputs__input--left"
            onChange={(e) => {
              setPlate(e.target.value);
            }}
          />
        </label>
        <label className="inputs__label">
          <p className="inputs__text">Date</p>
          <input
            type="date"
            className="inputs__input"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <label className="inputs__label ">
          <p className="inputs__text">Time</p>
          <input
            type="time"
            className="inputs__input inputs__input--right"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </label>
      </div>
      <Btn />
    </form>
  );
}
