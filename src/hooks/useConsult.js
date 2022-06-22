import { useState } from "react"

import {isAllowed} from "../services/check-if-allowed.js"
import {isValidDate} from "../services/validate-date.js"
import {isValidPlate} from "../services/validate-plate.js"

export  function useConsult() {
  const [result, setResult]=useState(false);
  const [onGoing, setOnGoing]=useState(true);
  const [error, setError]=useState(false);

  const queryData=(plate, date)=>{
    console.log("query")
    const queryPlate= isValidPlate(plate);
    if(!queryPlate.isValid){
      setError("Invalid Plate")
      return;
    }
    const queryDate= isValidDate(date);
    if(!queryDate.isValid){
      setError(queryDate.err)
      return;
    }
    setResult(isAllowed(queryPlate.plate.getLastDigit(), date))
  }
 
  return {result, queryData, error, setError}
}
