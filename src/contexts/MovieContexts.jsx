import {createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
        
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
        if (favorites.length >= 0) { 
            localStorage.setItem('favorites', JSON.stringify(favorites))
            console.log("Updated localStorage with favorites:", favorites)
        }
    }, [favorites])

    const addToFavorites = (movie) => {
        console.log("Adding movie to favorites:", movie.title)
        setFavorites(prev => {
            const newFavorites = [...prev, movie]
            console.log("New favorites after add:", newFavorites)
            return newFavorites
        })
    }

    const removeFromFavorites = (movieId) => {
        console.log("Removing movie from favorites:", movieId)
        setFavorites(prev => {
            const newFavorites = prev.filter(movie => movie.id !== movieId)
            console.log("New favorites after remove:", newFavorites)
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