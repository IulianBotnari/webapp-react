import { useGlobalContext } from "../global_context/GlobalContext.jsx"
import { useNavigate } from "react-router";

export default function AppHome() {
    const { films, getReviews } = useGlobalContext()
    const navigate = useNavigate()

    function handleClick(e, filmId) {
        e.preventDefault()

        getReviews(filmId)
        navigate(`/${filmId}`)


    }




    return (
        <>

            <main className="container d-flex flex-wrap col-6 justify-content-center">


                {films?.map((film, index) => (
                    <div key={index} className="card m-2" style={{ width: '18rem' }}>
                        <img src={film.image ? film.image : "https://picsum.photos/200/300"} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Titolo: {film.title}</h5>
                            <p className="card-text">Descrizione: {film.abstract}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Regista: {film.director}</li>
                            <li className="list-group-item">Genere: {film.genre}</li>
                            <li className="list-group-item">Anno: {film.release_year}</li>
                            {/* <li className="list-group-item">Aggiunto: {film.created_at}</li>
                        <li className="list-group-item">Aggiornato: {film.updated_at}</li> */}
                        </ul>
                        <div className="card-body d-flex justify-content-center">
                            <button className="btn btn-primary m-2" value={film.id} onClick={(e) => handleClick(e, film.id)}>Leggi recensioni</button>

                        </div>
                    </div>

                ))}
            </main>
        </>
    )
}