import React, { useState } from 'react';
import { Box, Button, TextField, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../componentes/Header';

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulación de envío del formulario
    setTimeout(() => {
      // Condicional para simular éxito o error
      const isSuccess = Math.random() > 0.5; // Simulación de éxito o error aleatorio
      if (isSuccess) {
        setSnackbarMessage('Usuario creado correctamente');
        setSnackbarSeverity('success');
        resetForm();
      } else {
        setSnackbarMessage('No se pudo crear el usuario. Inténtalo de nuevo.');
        setSnackbarSeverity('error');
      }
      setSnackbarOpen(true);
      setSubmitting(false);
    }, 400);
  };

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required('Requerido'),
    lastName: yup.string().required('Requerido'),
    email: yup.string().email('Correo electrónico no válido').required('Requerido'),
    contact: yup
      .string()
      .matches(/^\d{9}$/, 'El número de contacto debe tener exactamente 9 dígitos')
      .required('Requerido'),
    address1: yup.string().required('Requerido'),
    address2: yup.string(), // Opcional
    role: yup.string().required('Requerido'), // Nuevo campo para el rol
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
    role: '', // Valor inicial del nuevo campo
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Crear Usuario" subtitle="Crear nuevo Usuario" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Apellido"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Correo Electrónico"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Número de Contacto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                inputProps={{ maxLength: 9 }}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dirección 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dirección 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: 'span 4' }}
              />
              <FormControl variant="filled" fullWidth sx={{ gridColumn: 'span 4' }}>
                <InputLabel id="role-label">Cargo</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.role && !!errors.role}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Administrador">Administrador</MenuItem>
                  <MenuItem value="Analista">Analista</MenuItem>
                  <MenuItem value="Usuario">Usuario</MenuItem>
                  <MenuItem value="Inspector">Inspector</MenuItem>
                </Select>
                {touched.role && errors.role && (
                  <Box color="error.main" mt={1}>{errors.role}</Box>
                )}
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isSubmitting}
              >
                Crear Nuevo Usuario
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
