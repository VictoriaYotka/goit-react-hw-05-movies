const BASE_URL = 'https://api.themoviedb.org/3';
const OPTIONS = {headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM'}}

function fetchFunc (query) {
    return fetch(`${BASE_URL}/${query}`, OPTIONS).then( response => {
        if(!response.ok) return Promise.reject(response.status)
        // console.log(response)
        return response.json(); 
    })
}

export default fetchFunc;

