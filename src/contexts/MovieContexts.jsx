import {createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
        // Initialize state from localStorage immediately
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) {
            try {
                return JSON.parse(storedFavs)
            } catch (error) {
                console.error("Error parsing favorites from localStorage:", error)
                return []
            }
        }
        return []
    });

    useEffect (() => {
        // Only update localStorage when favorites actually changes
        if (favorites.length >= 0) { // This ensures it runs even for empty arrays
            localStorage.setItem('favorites', JSON.stringify(favorites))
            console.log("Updated localStorage with favorites:", favorites) // Debug line
        }
    }, [favorites])

    const addToFavorites = (movie) => {
        console.log("Adding movie to favorites:", movie.title) // Debug
        setFavorites(prev => {
            const newFavorites = [...prev, movie]
            console.log("New favorites after add:", newFavorites) // Debug
            return newFavorites
        })
    }

    const removeFromFavorites = (movieId) => {
        console.log("Removing movie from favorites:", movieId) // Debug
        setFavorites(prev => {
            const newFavorites = prev.filter(movie => movie.id !== movieId)
            console.log("New favorites after remove:", newFavorites) // Debug
            return newFavorites
        })
    }

    const isFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const values = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}