import React, { useState } from 'react';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1200")
            .then(res => res.json())
            .then(res => {setPokemon(res.results)})
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div>
                <h1>Pokemon</h1>
                <button onClick={getPokemon}>Fetch Pokemon</button>
                    {
                        pokemon.map((pokemonName, i) => {
                            return <div key = {i}>
                                <p>{pokemonName.name}</p>
                                </div>
                        })
                    }
            </div>
        </div>
    );
};

export default Pokemon;