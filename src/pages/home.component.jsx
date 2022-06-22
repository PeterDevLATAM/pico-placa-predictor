import Answer from "../components/answer.component"
import "./home.style.scss"
import "../sass/_variables.scss"
import Form from "../components/form.component"

export default function Home() {
  return (
    <div className="main-container">
      <Form/>
      <Answer/>
    </div>
  )
}
