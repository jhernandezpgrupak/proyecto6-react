import React from "react";
import Gifs from "./Gifs";

function Listgifs({gifs}){
    return(
        <div>
            {gifs.map(({id,title, url}) =>  
                <Gifs
                    key = {id}
                    id = {id}
                    title = {title}
                    url = {url}
                />
                )}
        </div>                 
    )
}
export default Listgifs;