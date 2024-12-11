import { Outlet } from "react-router";
import AppHeader from "./Header";
import AppFooter from "./Footer";


export default function AppLayout() {

    return (
        <>
            <div className="all_page">

                <AppHeader />


                <Outlet />




                <AppFooter />
            </div>
        </>
    )
}