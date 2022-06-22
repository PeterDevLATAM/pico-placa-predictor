import "./inputs.style.scss";

export default function Inputs() {
  return (
    <div className="inputs">
      <label className="inputs__label ">
        <p className="inputs__text">Plate</p>
        <input type="text" placeholder="AAA######" className="inputs__input inputs__input--left" />
      </label>
      <label className="inputs__label">
        <p className="inputs__text">Date</p>
        <input type="date"  className="inputs__input" />
      </label>
      <label className="inputs__label ">
        <p className="inputs__text">Time</p>
        <input type="time" className="inputs__input inputs__input--right" />
      </label>
    </div>
  );
}
