import "./answer.style.scss";

import { ReactComponent as Ok } from "../resources/svg/ok.svg";
import { ReactComponent as Nok } from "../resources/svg/nok.svg";

import { useSelector } from "react-redux";
import { selectQueryReducer } from "../store/query/query.selector";

export default function Answer() {
  const { approved, err, onGoing } = useSelector(selectQueryReducer);

  return (
    <>
      {!onGoing && (
        <>
          {approved && (
            <div className="answer">
              <Ok className="answer__icon" />
              <p className="answer__text answer__text--approved">
                Circulation Approved
              </p>
            </div>
          )}
          {!approved && !err && (
            <div className="answer">
              <Nok className="answer__icon" />
              <p className="answer__text answer__text--denied">
                Circulation Prohibited
              </p>
            </div>
          )}
          {err && (
            <div className="error">
              <p className="error__text">{err}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
