import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'


function App() {
  //API key
  const apiKey = "98e3fb1f";
  
  //State to hold movie data
  const [movie, setMovie] = useState(null)
  
  //function to get movies
  async function getMovie (movie){
    try {
      let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`
      let res = await axios.get(url)
      setMovie(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect((()=>{
    //getMovie()
    const movies = `http://www.omdbapi.com/?apikey=${apiKey}&`
    const random = Math.floor(Math.random() * movies.length);
    getMovie(random);
  }),[])

  return (
    <div className='App'>
      <Form movieSearch = {getMovie}/>
      <MovieDisplay movie ={movie}/>
    </div>
  )
}

export default App