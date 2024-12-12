import { GlobalContext } from "./global_context/GlobalContext"
import AppLayout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import FilmDetails from "./pages/FilmDetails"
import FormPage from "./pages/Form"
// import PageNotFound from "./pages/PageNotFound"
import

  function App() {


    return (
      <>
        <GlobalContext>
          <BrowserRouter>

            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<FilmDetails />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
                <Route path="/form-page" element={<FormPage />} />

              </Route>


            </Routes>

          </BrowserRouter>

        </GlobalContext>

      </>
    )
  }

export default App
