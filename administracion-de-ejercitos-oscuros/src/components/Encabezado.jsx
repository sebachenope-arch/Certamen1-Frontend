import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Encabezado() {
  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: 'black', color: 'yellow' }}
    >
      <Toolbar sx={{ position: 'relative' }}>
        {/* Texto en el extremo izquierdo */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ fontWeight: 'bold' }}
        >
          Anillo Único
        </Typography>

        {/* Texto en el extremo derecho */}
        <Typography 
          variant="subtitle1" 
          component="div"
          sx={{ 
            fontStyle: 'italic',
            position: 'absolute',
            right: '0%',
            transform: 'translateX(-50%)',
            textAlign: 'center'
          }}
        >
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}