import { Outlet, Route, Routes } from "react-router-dom"
import { UserNav } from "../components/nav/NavBar.jsx"
import { Home } from "../home/HomeFeed.jsx"
import { SafePlantsList } from "../components/safe/SafeList.jsx"
import { DeadlyPlantsList } from "../components/deadly/DeadlyList.jsx"
import { Profile } from "../components/profile/Profile.jsx"
import { ProfileForm } from "../components/profile/ProfileForm.jsx"
import { ChatForm } from "../components/chat/ChatForm.jsx"
import { Chat } from "../components/chat/Chat.jsx"


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

<Route path="/chat">
          <Route index element={<Chat currentUser={currentUser} />} />

          <Route
            path=":chatId/ChatForm"
            element={<ChatForm currentUser={currentUser} />}
          />
        </Route>
      </Route>
  </Routes>
  )
}