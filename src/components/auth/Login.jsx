import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Register } from "./Register.jsx"
import "./Login.css"
import { getUserByEmail } from "../../services/userService,jsx"

export const Login = () => {
  const [email, set] = useState("")
  const navigate = useNavigate()

  //when user clicks on login store login in local storage then navigate back to home
  //simulation to test different users in application - not IRL
  const handleLogin = (e) => {
    e.preventDefault()

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "activeUser",
          JSON.stringify({
            id: user.id,
            isStaff: user.isStaff,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1 style ={{
            textDecorationLine: "underline"
          }}>
            <strong>Welcome Back!</strong>
          </h1>
          <h3>Haven't eaten weird have you?</h3>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
        <h2>Not a Member Yet? Lets fix that!</h2>
        <Register />
      </section>
    </main>
  )
}