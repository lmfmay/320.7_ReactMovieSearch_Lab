function MovieDisplay({movie}){
    let loaded = ()=>{
        return(
        <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src= {movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
         </>
        )
    }

    let notLoaded = () => {
        return(
            <h1>No Movie to Display</h1>
        )
    }
return movie? loaded() : notLoaded()
}

export default MovieDisplay