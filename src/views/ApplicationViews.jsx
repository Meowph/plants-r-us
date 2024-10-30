import { useEffect, useState } from "react"
import { CustomerViews } from "./UserViews.jsx"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localPlantUser = localStorage.getItem("activeUser")
    const plantUserObject = JSON.parse(localPlantUser)

    setCurrentUser(plantUserObject)
  }, [])

  return  (

    <CustomerViews currentUser={currentUser}/>

  )
}

