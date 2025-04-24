import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/About.css";

export default function About() { 
    return (
        <div className="about-wrapper">
            <div className="about-card">
                <h1 className="about-title">About This App🫡</h1>
                <ul className="about-list">
                    <li>Pokémon information is retrieved from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>.</li>
                    <li>The Pokédex displays a list of Pokémon and supports simple pagination (e.g., “next” and “previous” buttons to get the next/previous page of Pokémon), such that not all Pokémon are displayed at the same time.</li>
                    <li>When a user clicks on a specific Pokémon, additional information about that Pokémon is displayed, such as type(s), stats, abilities, height, and weight.</li>
                    <li>The application contains multiple pages and utilizes React Router to route between them.</li>
                    <li>The application is developed using React and Vite.</li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}
