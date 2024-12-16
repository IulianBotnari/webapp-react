import { Outlet } from "react-router";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import { useGlobalContext } from "../global_context/GlobalContext";



export default function AppLayout() {


    const { loading } = useGlobalContext()


    return (
        <>
            <div className="all_page">

                {loading ?
                    <div className="loading">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> </div> :


                    <>

                        <AppHeader />


                        <Outlet />




                        <AppFooter />
                    </>
                }



            </div>
        </>
    )
}