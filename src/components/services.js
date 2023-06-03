// https://api.themoviedb.org/3/movie/550?api_key=1eb19aee2b556e872aeb4d12f3e3d0ef
const BASE_URL = 'https://api.themoviedb.org/3'
const KEY = '1eb19aee2b556e872aeb4d12f3e3d0ef';

async function fetchFunc (query) {
    const response = await fetch(`${BASE_URL}/${query}?api_key=${KEY}`);

        if(!response.ok) {
            return Promise.reject(response.status)
        }

        const data = await response.json();
        return data;    
}

export default fetchFunc;
