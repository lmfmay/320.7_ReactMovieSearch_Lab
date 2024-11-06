import { useState, useEffect } from 'react'

function Form({movieSearch}){
    const[formData,setFormData]= useState({
        movie: ''
    })
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        movieSearch(formData.movie)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name = 'movie' value = {formData.movie}/>
                <input type="submit" value="submit" />
            </form>
        
        </>
        
    )
}

export default Form