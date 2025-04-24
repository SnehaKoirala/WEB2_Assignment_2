import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

import Pokedex from './routes/Pokedex';           
import About from './routes/About';
import PokemonDetail from './routes/PokemonDetail';
import Root from './routes/Root';                  
import './index.css';

const queryClient = new QueryClient();  

const router = createHashRouter([
  {
    path: "/",             
    element: <Root />,     
    children: [
      { path: "/", 
        element: <Pokedex /> }, 
                          
      { path: "/about",
        element: <About /> }, 

      { path: "/pokemon/:pokemonName", 
        element: <PokemonDetail /> }, 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}> 
    <RouterProvider router={router} />  
  </QueryClientProvider>
);
