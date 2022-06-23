import "./form.style.scss";

import { useState } from "react";

import React from "react";
import Btn from "./btn.component";
import { useConsult } from "../hooks/useConsult.js";
import { useDispatch } from "react-redux";
import { setQueryStatus } from "../store/query/query.actions";
import { useSelector } from "react-redux";
import { selectQueryReducer } from "../store/query/query.selector";

export default function Form() {
  // Local State
  const [plate, setPlate] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();
  const { onGoing } = useSelector(selectQueryReducer);

  // Custom Hook
  const { queryData } = useConsult();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateObject = new Date(`${date}T${time}:00Z`);
    //Call to action
    queryData(plate, dateObject);
  };

  // reset Query
  const resetResult = () => {
    // checking if ongoing to avoid changing state
    if (!onGoing) {
      dispatch(setQueryStatus({ onGoing: true, approved: false, err: null }));
    }
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
              resetResult();
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
              resetResult();
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
              resetResult();
            }}
          />
        </label>
      </div>
      <Btn />
    </form>
  );
}
