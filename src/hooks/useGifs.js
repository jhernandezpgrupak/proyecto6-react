import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs"; // obtiene datos de la api
import GifsContextProvider  from "../context/GifsContext";

function useGifs({ keyword } = { keyword:null }){
    const [loading, setLoading] = useState(false) //Hook para animación
    const {gifs, setGifs} = useContext(GifsContextProvider)

    //const [gifs, setGifs] = useState([])
    
    //const {keyword} = params //Desestructurizar
    //const [gifs, setGifs] = useState([]) // recibe y actualiza los gifs

    useEffect(()=>{
        console.log('**************************')
        //setGifs(actualGifs =>({loading:true,results:actualGifs.results})) //La funcion nos devuelve el valor del estado actual        
        setLoading(true)
        //recuperamos la keyword
        const keywordToUse = keyword || localStorage.getItem('lasKeyword') || 'random'

        getGifs({keyword : keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //Guardamos la keyword
                localStorage.setItem('lasKeyword',keyword)                
            }).catch(function(error){
                console.log(error)
            });
        //getGifs({keyword}).then(gifs => setGifs(gifs)) 
    },[keyword, setGifs])

    return {loading, gifs}
}

export default useGifs; 
