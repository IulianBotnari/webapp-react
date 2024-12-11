import { NavLink } from "react-router";

export default function AppHeader() {
    return (
        <header className="d-flex justify-content-around align-items-center p-2 bg-primary">
            <NavLink to="/"><img className="logo" src="public/logo.png" alt="Logo" /></NavLink>
            <h1>Film review</h1>
        </header>




    )
}