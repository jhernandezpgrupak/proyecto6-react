import React from "react";
import '../css/Gifs.css'
import {Link} from 'wouter'
function Gifs({id, title, url}){

    return (
        <a href={`#${id}`} className="Gifs" key={id}>
            <h4>{title}</h4>            
            <Link to={`/gif/${id}`}>
                <img loading='lazy' key={id} src={url} description={title} alt={id}/>
            </Link>
        </a>  
    )
}

export default Gifs