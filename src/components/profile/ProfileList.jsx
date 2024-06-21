import { useEffect, useState } from "react"
import { Profile } from "./Profile.jsx"
import { getUserSafePlants } from "../../services/profileService.jsx"


export const ProfileList = () => {
  const [userPlants, setUserPlants] = useState([])


useEffect(() => {
  getUserSafePlants().filter(userPlants => {
      setUserPlants(userPlants)
  })
  }, [])

  return (
    <div className="userSafePlants-container">
        <h2>Safe Plants</h2>
        <article className="userPlants">
            {userPlants.map(plantObj => {
                return <Profile
                profile={plantObj}
                key={plantObj}
                />
            })}
        </article>
    </div>
)
}