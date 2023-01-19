import React, { useState } from "react";
import {useLocation} from "wouter"
import useGifs from "../../hooks/useGifs";
import Listgifs from "../../components/Listgifs";

// const POPULAR_GIFS=["México","Londres","Venecia","Canada","EUA"];

function Home(){
    const [keyword, setKeyword] =  useState(''); // Estado que modifica la palabra de búsqueda
    const [pushLocation,SetpushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit   = evt => {
        evt.preventDefault()
        SetpushLocation(`/search/${keyword}`)
    }

    const handleChange = (evt)=>{
        setKeyword(evt.target.value)
    }

    if(loading) return <i>Cargando... 👾👾👾</i>
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search a gif...' onChange={handleChange} type='text' value={keyword}/>
            </form>

            <h3>Última busqueda...</h3>

            <Listgifs gifs={gifs} /> 
            {
            /* <h3>Los Gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((gifs) =>(
                    <li key={gifs}>
                    <Link to={`/search/${gifs}`}>Gifs de {gifs}</Link>
                    </li>
                ))}
            </ul> */
            }
        </>
    )
}

export default Home;