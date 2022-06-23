import { isAllowed } from "../services/check-if-allowed.js";
import { isValidDate } from "../services/validate-date.js";
import { isValidPlate } from "../services/validate-plate.js";
import { useDispatch } from "react-redux";
import { setQueryStatus } from "../store/query/query.actions.js";

export function useConsult() {
  const dispatch = useDispatch();

  const queryData = (plate, date) => {
    const queryPlate = isValidPlate(plate);
    if (!queryPlate.isValid) {
      dispatch(
        setQueryStatus({
          onGoing: false,
          approved: false,
          err: "Invalid License Plate",
        })
      );
      return;
    }
    const queryDate = isValidDate(date);
    if (!queryDate.isValid) {
      dispatch(
        setQueryStatus({ onGoing: false, approved: false, err: queryDate.err })
      );
      return;
    }

    const answer = isAllowed(queryPlate.plate.getLastDigit(), date);

    if (answer) {
      dispatch(setQueryStatus({ onGoing: false, approved: true, err: null }));
    } else {
      dispatch(setQueryStatus({ onGoing: false, approved: false, err: null }));
    }
  };

  return { queryData};
}
