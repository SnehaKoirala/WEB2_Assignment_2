import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/PokemonDetail.css";

function PokemonDetail() {
  const { pokemonName } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [pokemonName]);

  if (!details) return <div className="loading">Loading...</div>;

  return (
    <div className="pokemon-detail-wrapper">
      <div className="pokemon-detail-card">
        <button className="back-button" onClick={() => navigate(-1)}> Back To Pokedex</button>

        <img
          src={details.sprites.other["official-artwork"].front_default || details.sprites.front_default}
          alt={details.name}
          className="pokemon-main-image"
        />

        <h2>{details.name.toUpperCase()}</h2>

        <div className="info-section">
          <p><strong>Height:</strong> {details.height}</p>
          <p><strong>Weight:</strong> {details.weight}</p>
          <p><strong>Type(s):</strong> {details.types.map(t => t.type.name).join(', ')}</p>
          <p><strong>Abilities:</strong> {details.abilities.map(a => a.ability.name).join(', ')}</p>
          <p><strong>Stats:</strong></p>
          <ul className="stats-list">
            {details.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
