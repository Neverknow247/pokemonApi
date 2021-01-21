import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0')
            .then(response => {
                console.log(response.data)
                setPokemon(response.data.results)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [clickclick, setClickClick] = useState(false);

    const click = e => {
        setClickClick(true);
    }
    return (
        <>
        <button onClick={click} value="Fetch Pokemon">Fetch Pokemon</button>
            { clickclick ? pokemon.length > 0 && pokemon.map((poke, i) => {
                return (<div key={i}>{poke.name}</div>)
            }): <></>}
        </>
    );
}
export default Pokemon;