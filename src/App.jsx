import { GlobalContext } from "./global_context/GlobalContext"
import AppLayout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import FilmDetails from "./pages/FilmDetails"
import { useState, useEffect } from "react"
// import LogIn from "./pages/LogIn"
// import SingIn from "./pages/SingIn"
// import UserHomePage from "./pages/UserHomePage"

// import PageNotFound from "./pages/PageNotFound"

import IsLoading from "./components/IsLoading"
function App() {





  return (
    <>
      <GlobalContext>
        <BrowserRouter>

          <Routes>


            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<FilmDetails />} />
              {/* <Route path="/login" element={<LogIn />} />
              <Route path="/singin" element={<SingIn />} />
              <Route path="/user/:id" element={<UserHomePage />} /> */}
              {/* <Route path="*" element={<PageNotFound />} /> */}


            </Route>



          </Routes>

        </BrowserRouter>

      </GlobalContext>

    </>
  )
}

export default App
