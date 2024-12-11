import { GlobalContext } from "./global_context/GlobalContext"
import AppLayout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import FilmDetails from "./pages/FilmDetails"
// import PageNotFound from "./pages/PageNotFound"

function App() {


  return (
    <>
      <GlobalContext>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/FilmDetails" element={<FilmDetails />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          </AppLayout>
        </BrowserRouter>

      </GlobalContext>

    </>
  )
}

export default App
