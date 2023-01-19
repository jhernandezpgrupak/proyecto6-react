import Gifs from "../../components/Gifs";
import useGlobalGifs from "../../hooks/useGlobalGifs";

function Detail({params}){
    //const {gifs} = useContext(GifsContextProvider)
    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGig => singleGig.id===params.id)
    return(
        <div>
            <h1>Gif con id {params.id}</h1>
            <Gifs {...gif}/>
        </div>
    )
}

export default Detail;