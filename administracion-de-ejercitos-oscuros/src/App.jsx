import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Encabezado from './components/Encabezado';
import EjercitoContainer from './containers/EjercitoContainer';

const sauronTheme = createTheme({
  palette: {
    mode: 'dark', 
    background: {
      default: '#121212', 
      paper: '#1e1e1e',   
    },
    primary: {
      main: '#ffb300',    
      contrastText: '#000000', 
    },
    secondary: {
      main: '#ffffff',    
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff', 
    }
  }
});

export default function App() {
  // Estado global para almacenar el catálogo de tropas
  const [tropas, setTropas] = useState([]);

  // Función para insertar un registro de manera inmutable
  const handleRegistrarGuerrero = (nuevoGuerrero) => {
    setTropas([...tropas, nuevoGuerrero]);
  };

  // Función para eliminar un registro de manera inmutable usando filter
  const handleEliminarGuerrero = (indexEliminar) => {
    const nuevasTropas = tropas.filter((_, index) => index !== indexEliminar);
    setTropas(nuevasTropas);
  };

  return (
    <ThemeProvider theme={sauronTheme}>
      <CssBaseline />
      <Encabezado />
      <EjercitoContainer 
        tropas={tropas}
        onRegistrarGuerrero={handleRegistrarGuerrero} 
        onEliminarGuerrero={handleEliminarGuerrero}
      />
    </ThemeProvider>
  );
}