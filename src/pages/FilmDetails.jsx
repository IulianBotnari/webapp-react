import { useGlobalContext } from "../global_context/GlobalContext"
import { useNavigate } from "react-router"
import { useEffect, useState } from 'react'
import { useParams } from "react-router"

export default function AppFilmDetails() {
    const { reviews, filmTitle, films } = useGlobalContext()
    const [filmId, setFilmId] = useState("")
    const [text, setText] = useState("")
    const [vote, setVote] = useState("")
    const [name, setName] = useState("")
    const [reviewsById, setReviewsById] = useState([])
    const [filmTitleById, setFilmTitleById] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(films.data);




    console.log(filmTitleById);


    useEffect(() => {
        setFilmId(id)
        getReviews(id)

    }, [])

    async function getReviews(id) {
        try {
            const response = await fetch(`http://localhost:3000/${id}`)
            const data = await response.json()

            setFilmTitleById(data)
            setReviewsById(data.reviews)

        }
        catch (error) {
            console.error('Error:', error)
        }

    }
    console.log(filmId)

    function handleClick(e) {
        e.preventDefault()
        navigate(`/`)
    }



    async function postrewiev(e) {


        try {
            const response = await fetch('http://localhost:3000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    movie_id: filmId,
                    name: name,
                    vote: vote,
                    text: text
                }),
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            {/* lista recensioni */}


            <div className="reviews">
                <h1>{filmTitleById.title}</h1>
                {reviews?.length > 0 ? (
                    reviews.map((review, index) => (
                        <div className="card" key={index}>
                            <h5 className="card-header">Utente: {review.name}</h5>
                            <div className="card-body">
                                <h5 className="card-title">Voto: {review.vote}</h5>
                                <p className="card-text">Recensione: {review.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    reviewsById.map((review, index) => (
                        <div className="card" key={index}>
                            <h5 className="card-header">Utente: {review.name}</h5>
                            <div className="card-body">
                                <h5 className="card-title">Voto: {review.vote}</h5>
                                <p className="card-text">Recensione: {review.text}</p>
                            </div>
                        </div>
                    ))
                )}




                {/* offcanvass structure */}



                <a href="#" className="btn btn-primary" onClick={handleClick}>Home Page</a>



                <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Scrivi la tua recensione</button>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Scrivi la tua recensione</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">



                        {/* use form to add new review */}



                        <form onSubmit={postrewiev} className="row row-cols-lg-auto g-3 align-items-start flex-column">

                            <div className="col-12">
                                <label className="visually-hidden" htmlfor="inlineFormInputGroupUsername">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">Nome</div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>

                            <div className="">
                                <label htmlfor="floatingTextarea">Recensione</label>
                                <textarea className="form-control" rows="10" cols="500" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                            </div>

                            <div className="col-12">
                                <label className="visually-hidden" htmlfor="inlineFormSelectPref">Preference</label>
                                <select className="form-select" id="inlineFormSelectPref" onChange={(e) => setVote(e.target.value)}>
                                    <option value="" >Voto...</option>
                                    <option value="1">Una stella</option>
                                    <option value="2">Fue stelle</option>
                                    <option value="3">Tre stelle</option>
                                    <option value="4">Quattro stelle</option>
                                    <option value="5">Cinque stelle</option>
                                </select>
                            </div>



                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}