
const key = '65jYvAiiC8Uqcj5Y8OOd3392DpbHW9L5'

function getGifs({keyword}){
        const apiUrl =  `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=20&offset=0&rating=g&lang=es`
        return fetch(apiUrl)
                .then(res => res.json())
                .then(response => {
                    const {data = []} = response                    
                    if(Array.isArray(data)){
                        const gifs = data.map(image => {
                        const {images, id, title} = image //se destructura el objeto (saber el nombre de las variables)            
                        const {url} = images.downsized_medium
                        return {title, id, url}
                    })
                        return gifs                    
                    }
                })
}
export default getGifs;