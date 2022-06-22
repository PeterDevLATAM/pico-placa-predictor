import "./answer.style.scss";

import { ReactComponent as Ok } from "../resources/svg/ok.svg";
import { ReactComponent as Nok } from "../resources/svg/nok.svg";

export default function Answer() {
  return (
    <>
      {true && (
        <div className="answer">
          <Ok className="answer__icon" />
          <p className="answer__text answer__text--approved">
            Approved Circulation
          </p>
        </div>
      )}
      {false && (
        <div className="answer">
          <Nok className="answer__icon" />
          <p className="answer__text answer__text--denied">
            Prohibited Circulation
          </p>
        </div>
      )}
    </>
  );
}
