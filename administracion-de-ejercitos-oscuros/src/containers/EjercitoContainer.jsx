import React from 'react';
import GuerreroForm from '../modules/GuerreroForm';
import EjercitoTable from '../modules/EjercitoTable';

export default function EjercitoContainer({ tropas, onRegistrarGuerrero, onEliminarGuerrero }) {
  return (
    <div className="container mt-4 mb-5">
      {/* Fila Superior: Formulario de Registro */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-8">
          <GuerreroForm onRegistrar={onRegistrarGuerrero} />
        </div>
      </div>
      
      {/* Fila Inferior: Tabla de Tropas */}
      <div className="row">
        <div className="col-12">
          <EjercitoTable tropas={tropas} onEliminar={onEliminarGuerrero} />
        </div>
      </div>
    </div>
  );
}