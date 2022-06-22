import "./form.style.scss"

import React from 'react'
import Inputs from "./input.component"
import Btn from "./btn.component"

export default function Form() {
  return (
    <form className="form">
      <Inputs/>
      <Btn/>
    </form>
  )
}
