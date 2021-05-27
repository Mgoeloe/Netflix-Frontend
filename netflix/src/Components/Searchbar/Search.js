import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

export default function Search() {
    const [actors, setActors] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const API_URL = `http://localhost:8080/api/movies/search/${search}`;
        axios
            .get(API_URL)
            .then(res => {
                const actors = res.data
                setActors(actors)
              
            })
            console.log(actors)
    }, [])

    const filteredActors = search.length === 0 ? actors : 
    actors.filter(actor => actor.full_name.
                toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
        </div>
    )
}