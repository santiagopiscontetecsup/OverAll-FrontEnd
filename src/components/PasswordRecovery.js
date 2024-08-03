import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ open: false, text: '', severity: 'info' });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setMessage({ open: true, text: 'Por favor, introduce un correo electrónico válido.', severity: 'error' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage({ open: true, text: 'Instrucciones enviadas si el correo está registrado.', severity: 'success' });
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setMessage({ ...message, open: false });
  };

  return (
    <div style={{ backgroundImage: 'url(/fondo_pag.jpg)', backgroundSize: 'cover', minHeight: '100vh', padding: '2rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 3,
          borderRadius: 2,
          width: '100%',
          maxWidth: 400,
          margin: '0 auto',
          color: 'black' 
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ color: 'black', fontFamily: 'Calibri, sans-serif' }} 
        >
          Recuperar Contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Dirección de correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white' }} 
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
        </Box>
        <Snackbar open={message.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={message.severity} sx={{ width: '100%' }}>
            {message.text}
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}
