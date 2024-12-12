import React, { createContext, useContext } from 'react'
import { useState, useEffect } from "react"

const context = createContext()

export function GlobalContext({ children }) {

    const [films, setFilms] = useState([])
    const [reviews, setReviews] = useState([])
    const [filmTitle, setFilmTitle] = useState('')

    async function getReviews(id) {
        try {
            const response = await fetch(`http://localhost:3000/${id}`)
            const data = await response.json()
            setFilmTitle(data.title)
            setReviews(data.reviews)

        }
        catch (error) {
            console.error('Error:', error)
        }


    }
    async function getFilms() {

        try {
            const response = await fetch('http://localhost:3000')
            const data = await response.json()

            setFilms(data)
        }
        catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        getFilms()
    }, [])


    const values = {
        films,
        setFilms,
        getReviews,
        reviews,
        filmTitle

    }

    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}

export const useGlobalContext = () => useContext(context)