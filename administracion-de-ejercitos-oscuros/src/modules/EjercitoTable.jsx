import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip, 
  Button 
} from '@mui/material';

export default function EjercitoTable({ tropas, onEliminar }) {
  return (
    <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#1e1e1e' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Tipo</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Categoría / Rango</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Nivel</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Clasificación</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tropas.map((guerrero, index) => (
            <TableRow key={index} hover>
              <TableCell>{guerrero.nombre}</TableCell>
              <TableCell>{guerrero.tipo}</TableCell>
              <TableCell>{guerrero.rango}</TableCell>
              <TableCell>{guerrero.nivel}</TableCell>
              
              <TableCell>
                {/* Renderizado Condicional del Chip por Tipo */}
                <Chip 
                  label={guerrero.tipo} 
                  color={guerrero.tipo === 'Orco' ? 'primary' : 'error'} 
                  variant="outlined"
                />
              </TableCell>
              
              <TableCell align="center">
                {/* Botón de eliminación para remover el registro del estado de React */}
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small"
                  onClick={() => onEliminar(index)}
                >
                  Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {/* Mensaje si el arreglo está vacío */}
          {tropas.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} align="center" sx={{ py: 4, fontStyle: 'italic', color: 'gray' }}>
                El ejército de Sauron no tiene tropas
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}