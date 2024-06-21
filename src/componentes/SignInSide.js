import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Alert,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function SignInSide() {
  const theme = useTheme();
  const [empresa, setEmpresa] = useState('');
  const [logoEmpresa, setLogoEmpresa] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();

  const empresas = {
    'Cerro Verde': 'logo_cerroverde.png',
    'Bambas': 'bambas.jpg',
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setEmpresa(value);
    setLogoEmpresa(empresas[value]);
    setError('');
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsPasswordValid(value !== '');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!empresa || !isEmailValid || password === '') {
      setError('Por favor, selecciona una empresa, asegúrate de que el correo electrónico sea válido y de que la contraseña no esté vacía para continuar.');
      setIsPasswordValid(password !== '');
      return;
    }

    try {
      const success = login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.');
      }
    } catch (error) {
      setError('Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(fondo2.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/logo_empresa.jpg`} alt="Logo de la empresa" style={{ width: '150px', height: '150px' }} />
          <Typography component="h1" variant="h5">
            INGRESO AL SISTEMA
          </Typography>
          {logoEmpresa ? (
            <img src={`${process.env.PUBLIC_URL}/${logoEmpresa}`} alt="Logo Empresa" style={{ width: '50px', height: '50px', margin: '8px' }} />
          ) : (
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          )}
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="empresa-select-label">Empresa</InputLabel>
                <Select
                  labelId="empresa-select-label"
                  id="empresa-select"
                  value={empresa}
                  label="Empresa"
                  onChange={handleChange}
                >
                  {Object.keys(empresas).map((nombreEmpresa) => (
                    <MenuItem key={nombreEmpresa} value={nombreEmpresa}>
                      {nombreEmpresa}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {isEmailValid ? null : <Alert severity="error">El correo electrónico no es válido.</Alert>}
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
              onChange={handleEmailChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              error={!isEmailValid}
              helperText={isEmailValid ? '' : 'Ingresa una dirección de correo válida.'}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              error={!isPasswordValid}
              helperText={isPasswordValid ? '' : 'La contraseña no puede estar vacía.'}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordar mis datos" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/PasswordRecovery" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
