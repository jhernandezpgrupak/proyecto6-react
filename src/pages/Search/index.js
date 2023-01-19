import React from "react";
import Listgifs from "../../components/Listgifs"; //retorna el componente que muestra los gifs con los elementos en orden <a href></a>
import useGifs from "../../hooks/useGifs";

function SearchResults({params}){ //recibe los parametros   
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})

    if(loading) return <i>Cargando... 👾👾👾</i>
    
    return (
        <Listgifs gifs={gifs}/>
    )   
}

export default SearchResults;