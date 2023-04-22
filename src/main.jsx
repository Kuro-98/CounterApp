import React from 'react';

//comenzamos poniendo imr para el primer import que se ve arriba

import ReactDOM from 'react-dom/client';
//siempre siempre deben usarse estos dos imports.
import { App } from './FirstApp';
import { PrimerApp } from './PrimerApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <App title='Hola, soy Manolo' /> */}
  </React.StrictMode>
);

//siempre debe existir una forma de renderizar los comps

//Esta seria la estructura necesaria para renderizar
//pero esto no se debe hacer.
