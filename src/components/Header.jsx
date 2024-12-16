import { NavLink } from "react-router";

export default function AppHeader() {
    return (
        <header className="d-flex justify-content-around align-items-center p-2">
            <NavLink to="/"><img className="logo" src="public/logo.png" alt="Logo" /></NavLink>
            <h1 className="agu-display-title-font">Film review</h1>
            {/* <button className="btn btn-primary">Login</button> */}
        </header>
    )
}