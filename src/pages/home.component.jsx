import Answer from "../components/answer.component"
import Btn from "../components/btn.component"
import Inputs from "../components/input.component"
import "./home.style.scss"
import "../sass/_variables.scss"

export default function Home() {
  return (
    <div className="main-container">
      <Inputs/>
      <Btn/>
      <Answer/>
    </div>
  )
}
