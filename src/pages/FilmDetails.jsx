import { useGlobalContext } from "../global_context/GlobalContext"
import { useNavigate } from "react-router"

export default function AppFilmDetails() {
    const { reviews, filmTitle } = useGlobalContext()
    const navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()
        navigate(`/`)
    }

    return (
        <>
            <div className="reviews">
                <h1>{filmTitle}</h1>
                {reviews.map((review, index) => (
                    <div className="card" key={index}>
                        <h5 className="card-header">Utente: {review.name}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Voto: {review.vote}t</h5>
                            <p className="card-text">Recensione: {review.text}</p>

                        </div>
                    </div>
                ))}
                <a href="#" className="btn btn-primary" onClick={handleClick}>Home Page</a>
            </div>
        </>
    )
}