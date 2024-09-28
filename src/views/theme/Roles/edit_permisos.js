import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CAlert,
} from '@coreui/react';
import Select from 'react-select';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EditarPermisos = () => {
  const [validated, setValidated] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [areasSeleccionadas, setAreasSeleccionadas] = useState([]);
  const [password, setPassword] = useState('Password123!'); 
  const [confirmPassword, setConfirmPassword] = useState('Password123!'); // Contraseña estática para el ejemplo
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [areaError, setAreaError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordValidationError, setPasswordValidationError] = useState(false);
  const [isActive, setIsActive] = useState(true); // Estado para la actividad

  const options = [
    { value: 'chancado', label: 'Chancado' },
    { value: 'molienda', label: 'Molienda' },
    { value: 'flotacion', label: 'Flotación' },
    { value: 'moly', label: 'Moly' },
    { value: 'filtros', label: 'Filtros' },
  ];

  const handleAreaChange = (selectedOptions) => {
    setAreasSeleccionadas(selectedOptions);
    setAreaError(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };

  useEffect(() => {
    const isPasswordValid = validatePassword(password);
    setPasswordValidationError(!isPasswordValid);
  }, [password]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const isPasswordValid = validatePassword(password);

    if (
      form.checkValidity() === false ||
      password !== confirmPassword ||
      areasSeleccionadas.length === 0 ||
      !isPasswordValid
    ) {
      event.preventDefault();
      event.stopPropagation();
      setErrorMessage('Por favor, completa todos los campos correctamente.');
      setSuccessMessage('');

      if (areasSeleccionadas.length === 0) {
        setAreaError(true);
      } else {
        setAreaError(false);
      }

      if (password !== confirmPassword) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      if (!isPasswordValid) {
        setPasswordValidationError(true);
      } else {
        setPasswordValidationError(false);
      }
    } else {
      event.preventDefault();
      setSuccessMessage('Usuario editado exitosamente.');
      setErrorMessage('');
      console.log('Áreas seleccionadas:', areasSeleccionadas);
    }
    setValidated(true);
  };

  return (
    <>
      {successMessage && <CAlert color="success">{successMessage}</CAlert>}
      {errorMessage && <CAlert color="danger">{errorMessage}</CAlert>}
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol md={6}>
          <CFormLabel htmlFor="nombre">Nombre</CFormLabel>
          <CFormInput type="text" id="nombre" defaultValue="Juan Pérez" required />
          <CFormFeedback invalid>Por favor, proporciona un nombre válido.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="email">Correo electrónico</CFormLabel>
          <CFormInput type="email" id="email" defaultValue="juan.perez@example.com" required />
          <CFormFeedback invalid>Por favor, proporciona una dirección de correo electrónico válida.</CFormFeedback>
        </CCol>

        {/* Contraseña */}
        <CCol md={6}>
          <CFormLabel htmlFor="password">Contraseña</CFormLabel>
          <div className="input-group">
            <CFormInput
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={togglePasswordVisibility} className="btn btn-outline-secondary">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-muted">
            La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.
          </div>
          {passwordValidationError && (
            <CFormFeedback invalid className="d-block">
              La contraseña no cumple con los requisitos.
            </CFormFeedback>
          )}
        </CCol>

        {/* Confirmar contraseña */}
        <CCol md={6}>
          <CFormLabel htmlFor="confirmPassword">Confirmar Contraseña</CFormLabel>
          <div className="input-group">
            <CFormInput
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility} className="btn btn-outline-secondary">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {passwordError && (
            <CFormFeedback invalid className="d-block">
              Las contraseñas no coinciden.
            </CFormFeedback>
          )}
        </CCol>

        {/* Otros campos */}
        <CCol md={6}>
          <CFormLabel htmlFor="contrato">Contrato</CFormLabel>
          <CFormSelect id="contrato" required defaultValue="bambas">
            <option value="">Selecciona un contrato...</option>
            <option value="bambas">Bambas</option>
            <option value="overall">OverAll</option>
          </CFormSelect>
          <CFormFeedback invalid>Por favor, selecciona un contrato.</CFormFeedback>
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="area">Área</CFormLabel>
          <Select
            id="area"
            options={options}
            isMulti
            onChange={handleAreaChange}
            className={`basic-multi-select ${areaError ? 'is-invalid' : ''}`}
            classNamePrefix="select"
            placeholder="Selecciona las áreas..."
            required
          />
          {areaError && (
            <CFormFeedback invalid className="d-block">Por favor, selecciona al menos un área.</CFormFeedback>
          )}
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="rol">Usuario</CFormLabel>
          <CFormSelect id="rol" required defaultValue="administrador">
            <option value="">Selecciona un rol...</option>
            <option value="administrador">Administrador</option>
            <option value="analista">Analista</option>
            <option value="supervisor">Supervisor</option>
            <option value="inspector">Inspector</option>
            <option value="cliente">Cliente</option>
          </CFormSelect>
          <CFormFeedback invalid>Por favor, selecciona un rol.</CFormFeedback>
        </CCol>

        {/* Checkbox de actividad */}
        <CCol md={6}>
          <CFormLabel>Estado de la cuenta</CFormLabel>
          <div>
            <input
              type="checkbox"
              id="actividad"
              checked={!isActive}
              onChange={() => setIsActive(!isActive)}
            />
            <CFormLabel htmlFor="actividad" className="ms-2">
              Cuenta desactivada
            </CFormLabel>
          </div>
        </CCol>

        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Editar Usuario
          </CButton>
        </CCol>
      </CForm>
    </>
  );
};

export default EditarPermisos;