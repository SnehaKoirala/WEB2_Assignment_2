import React, { useState, useEffect } from "react"; 
import { useQuery } from '@tanstack/react-query'; 
import axios from "axios"; 
import { useNavigate, useLocation } from "react-router-dom"; 
import PokemonCard from "../components/PokemonCard"; 
import Pagination from "../components/Pagination"; 
import "../styles/Pokedex.css"; 

export default function Pokedex() { 
  const [offset, setOffset] = useState(0); 
  const limit = 12;
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const offsetFromUrl = params.get("offset");
    if (offsetFromUrl) {
      setOffset(parseInt(offsetFromUrl, 10));  
    }
  }, [location]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemonList', offset],
    queryFn: async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      return res.data;
    }
  });

  const updateOffsetInUrl = (newOffset) => {
    navigate(`?offset=${newOffset}`, { replace: true });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="pokedex-container">
      <p className="section-subtitle">Browse through your favourite Pokémon!</p>
      <div className="pokemon-grid">
        {data.results.map(pokemon => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
      <Pagination offset={offset} setOffset={setOffset} updateOffsetInUrl={updateOffsetInUrl} />
    </div>
  );
}
