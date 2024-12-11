import { useState } from "react"
import { useGlobalContext } from "../global_context/GlobalContext"


export default function FormPage() {
    const { films } = useGlobalContext()
    const [filmTitle, setFilmTitle] = useState("")
    const [text, setText] = useState("")
    const [vote, setVote] = useState("")
    const [name, setName] = useState("")

    async function postrewiev(e) {


        try {
            const response = await fetch('http://localhost:3000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    movie_id: filmTitle,
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
            <div className="container form">

                <h1>Form Page</h1>
                <form onSubmit={postrewiev} className="row row-cols-lg-auto g-3 align-items-start flex-column">
                    <div className="col-12 my-3">
                        <label className="visually-hidden" htmfor="inlineFormSelectPref">Preference</label>
                        <select className="form-select" id="inlineFormSelectPref" onChange={(e) => setFilmTitle(e.target.value)}>
                            <option value="">Scegli film da recensire...</option>
                            {films.map((film, index) => (
                                <option key={index} value={film.id}>{film.title}</option>
                            ))}
                        </select>
                    </div>
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

                    {/* <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label className="form-check-label" htmlfor="inlineFormCheck">
                                Remember me
                            </label>
                        </div>
                    </div> */}

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>

    )

}