import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel, 
  Slider, 
  Select, 
  MenuItem, 
  InputLabel, 
  Rating, 
  Button,
  Box
} from '@mui/material';

export default function GuerreroForm({ onRegistrar }) {
  // Estados locales para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('Orco');
  const [nivel, setNivel] = useState(1);
  const [rango, setRango] = useState('');
  const [amenaza, setAmenaza] = useState(1); // Mínimo obligatorio: 1 estrella

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Creamos el objeto con los datos del guerrero
    const nuevoGuerrero = {
      nombre,
      tipo,
      nivel,
      rango,
      amenaza
    };

    // Enviamos los datos al componente padre
    if(onRegistrar) {
        onRegistrar(nuevoGuerrero);
    }

    // Limpiamos el formulario después de registrar
    setNombre('');
    setTipo('Orco');
    setNivel(1);
    setRango('');
    setAmenaza(1);
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Ingresar Guerrero
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* 1. Nombre del Guerrero */}
          <TextField 
            label="Nombre del Guerrero" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          {/* 2. Tipo de Guerrero */}
          <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">Tipo de Guerrero</FormLabel>
            <RadioGroup 
              row 
              value={tipo} 
              onChange={(e) => setTipo(e.target.value)}
            >
              <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
              <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
            </RadioGroup>
          </FormControl>

          {/* 3. Nivel de Combate */}
          <Box sx={{ mt: 2, mb: 1 }}>
            <Typography gutterBottom>
              Nivel de Combate: {nivel}
            </Typography>
            <Slider
              value={nivel}
              min={1}
              max={100}
              step={1}
              onChange={(e, newValue) => setNivel(newValue)}
              valueLabelDisplay="auto"
            />
          </Box>

          {/* 4. Categoría / Rango */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="rango-label">Categoría / Rango</InputLabel>
            <Select
              labelId="rango-label"
              value={rango}
              label="Categoría / Rango"
              onChange={(e) => setRango(e.target.value)}
            >
              <MenuItem value="Capitán">Capitán</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Explorador">Explorador</MenuItem>
              <MenuItem value="Asediador">Asediador</MenuItem>
            </Select>
          </FormControl>

          {/* 5. Nivel de Amenaza / Furia */}
          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography component="legend">Nivel de Amenaza / Furia</Typography>
            <Rating
              value={amenaza}
              onChange={(e, newValue) => {
                // Forzamos a que el mínimo sea 1 estrella
                setAmenaza(newValue < 1 ? 1 : newValue);
              }}
              max={5}
            />
          </Box>

          {/* Botón de Registro */}
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ backgroundColor: 'black', color: 'yellow', '&:hover': { backgroundColor: '#333' } }}
          >
            Registrar Guerrero
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}