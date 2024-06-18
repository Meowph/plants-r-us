import { Outlet, Route, Routes } from "react-router-dom"
import { UserNav } from "../components/nav/NavBar.jsx"
import { Home } from "../home/HomeFeed.jsx"
import { SafePlantsList } from "../components/safe/SafeList.jsx"
import { DeadlyPlantsList } from "../components/deadly/DeadlyList.jsx"


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

        <Route index element={<Home />} />

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
      </Route>
  </Routes>
  )
}