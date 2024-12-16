import React, { createContext, useContext } from 'react'
import { useState, useEffect } from "react"


const context = createContext()

export function GlobalContext({ children }) {

    const [films, setFilms] = useState([])
    const [reviews, setReviews] = useState([])
    const [filmTitle, setFilmTitle] = useState('')
    const [loading, setLoading] = useState(false)

    async function getReviews(id) {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:3000/${id}`)
            const data = await response.json()
            setFilmTitle(data.title)
            setReviews(data.reviews)

        }
        catch (error) {
            console.error('Error:', error)
        }
        setLoading(false)

    }
    async function getFilms() {

        try {
            setLoading(true)
            const response = await fetch('http://localhost:3000')
            const data = await response.json()

            setFilms(data)
        }
        catch (error) {
            console.error('Error:', error)
        }

        setLoading(false)
    }

    useEffect(() => {
        getFilms()
    }, [])


    const values = {
        films,
        setFilms,
        getReviews,
        reviews,
        filmTitle,
        loading

    }

    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}

export const useGlobalContext = () => useContext(context)