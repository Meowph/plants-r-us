import { Outlet, Route, Routes } from "react-router-dom"
import { UserNav } from "../components/nav/NavBar.jsx"
import { Home } from "../home/HomeFeed.jsx"
import { SafePlantsList } from "../components/safe/SafeList.jsx"
import { DeadlyPlantsList } from "../components/deadly/DeadlyList.jsx"
import { Profile } from "../components/profile/Profile.jsx"
import MessageList from "../components/messages/MessageList.jsx"
import { ProfileList } from "../components/profile/ProfileList.jsx"


export const CustomerViews = ({ currentUser }) => {
  return (
  <Routes>
      <Route 
          path="/" 
          element={
        <>
          <UserNav />
          <Outlet />
        </>
        }
      >

        <Route path="home" index element={<Home />} />

        <Route path="safe">
                    <Route index
                        element={<SafePlantsList currentUser={currentUser} />}
                    />
      </Route>
      <Route path="deadly">
                    <Route index
                        element={<DeadlyPlantsList currentUser={currentUser} />}
                    />
      </Route>

      <Route path="profile/:profileId"  element={<Profile currentUser={currentUser} />}>

      </Route>
      <Route path="messages">
                    <Route index
                        element={<MessageList currentUser={currentUser} />}
                    />
      </Route>
      <Route path="profile">
                    <Route index
                        element={<ProfileList currentUser={currentUser} />}
                    />
      </Route>
      </Route>
  </Routes>
  )
}