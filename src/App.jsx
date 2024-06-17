import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/auth/Login.jsx'
import { Authorized } from './views/Authorized.jsx'
import { ApplicationViews } from './views/ApplicationViews.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes> 
      <Route path="/login" element={<Login />}/>

      <Route
        path='*'
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
        />
    </Routes>
  )
}

export default App
