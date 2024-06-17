import { Outlet, Route, Routes } from "react-router-dom"
import { UserNav } from "../components/nav/NavBar.jsx"
import { Home } from "../home/HomeFeed.jsx"


export const CustomerViews = ({ currentUser }) => {
  return (
  <Routes>
      <Route 
          path="/" 
          element={
        <>
          <UserNav />
          <Outlet />
        </>}
      >

        <Route index element={<Home />} />
      </Route>
  </Routes>
  )
}