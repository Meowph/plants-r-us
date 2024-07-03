import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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
          })
        )

        navigate("/home")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <img src="../public/images/logo.jpeg" alt="Fern Logo" className="fern-logo"
          style={{
            height: '6rem',
            width: '6rem',
          }}
          />
          <h1>
           Welcome Explorers To Plants-R-Us!
          </h1>
          <p>(Haven't eaten anything weird lately... have you?)</p>
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
                Sign In
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
      <Link className="register-link" to="/register">Not a member yet? Lets fix that!</Link>
      </section>
    </main>
  )
}