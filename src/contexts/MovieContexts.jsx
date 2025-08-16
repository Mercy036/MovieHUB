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
    
    const [watchLater, setWatchLater] = useState(() => {
        const storedWatchLater = localStorage.getItem("watchLater")
        if (storedWatchLater) {
            try {
                return JSON.parse(storedWatchLater)
            } catch (error) {
                console.error("Error parsing watch later from localStorage:", error)
                return []
            }
        }
        return []
    })
    
    useEffect(() => {
        if (watchLater.length >= 0) {
            localStorage.setItem('watchLater', JSON.stringify(watchLater))
            console.log("Updated localStorage with watchLater:", watchLater)
        }
    }, [watchLater])
    
    const removeFromWatchLater = (movieId) => {
        console.log("Removing from watch later", movieId)
        setWatchLater(prev => {
            const newWatchLater = prev.filter(movie => movie.id !== movieId)
            console.log("New watch later after remove:", newWatchLater)
            return newWatchLater
        })
    }

    const isWatchLater = (movieId) => {
        return watchLater.some(movie => movie.id === movieId)
    }

    const addToWatchLater = (movie) => {
        console.log("Adding to watch later:", movie.title)
        setWatchLater(prev => {
            // Check if movie already exists to prevent duplicates
            if (prev.some(existingMovie => existingMovie.id === movie.id)) {
                console.log("Movie already in watch later")
                return prev
            }
            const newWatchLater = [...prev, movie]
            console.log("New watch later after add:", newWatchLater)
            return newWatchLater
        })
    }
    
    const values = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites,
        watchLater, // Fixed: Export watchLater state, not WatchLater component
        addToWatchLater,
        removeFromWatchLater,
        isWatchLater
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}