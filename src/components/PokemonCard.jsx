import React from "react"; 
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const typeColors = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
};

export default function PokemonCard({ name }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return res.data;
    }
  });

  if (isLoading) return null;
  if (isError) return <p>Error loading Pokémon.</p>;

  const primaryType = data.types[0].type.name;
  const bgColor = typeColors[primaryType] || "#ccc";

  return (
    <Link to={`/pokemon/${data.name}`} className="pokemon-card" style={{ backgroundColor: bgColor }}>
      <p className="pokemon-number">#{data.id}</p>
      <h3 className="pokemon-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
      <img className="pokemon-image" src={data.sprites.front_default} alt={data.name} />
    </Link>
  );
}
