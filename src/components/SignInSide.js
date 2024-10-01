import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CFormFeedback
} from '@coreui/react';
import { Link } from 'react-router-dom';

const SignInSide = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError('Por favor, introduce una dirección de correo válida.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Por favor, introduce tu contraseña.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const isAuthenticated = login(email, password);
    if (isAuthenticated) {
      navigate('/perfil');
    } else {
      setLoginError('El usuario o contraseña no son correctos.');
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(email);
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#ccc',
    borderRadius: '5px',
    fontSize: '0.85rem',
    padding: '8px',
    color: 'black' 
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center justify-content-center" style={{ backgroundImage: 'url(/fondo_pag.jpg)', backgroundSize: 'cover' }}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}> 
            <CCardGroup>
              <CCard className="p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: 'auto', maxWidth: '100%', minWidth: '280px' }}>
                <CCardBody>
                  <div className="text-center mb-3">
                    <img src="/LOG02.png" alt="Static Logo" style={{ width: '140px' }} /> {/* Reducir tamaño del logo */}
                  </div>
                  <CForm onSubmit={handleSubmit}>
                    <h1 className="text-center mb-3" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'normal' }}>Ingreso al Sistema</h1>
                    <p className="text-center text-secondary mb-3" style={{ fontWeight: 'normal' }}>Bienvenido al sistema de OverAll Solutions</p>
                    {loginError && <p className="text-center text-danger mb-3">{loginError}</p>}

                    <label htmlFor="email" style={{ color: '#333', fontWeight: 'normal', fontSize: '0.85rem' }}>Correo Electrónico</label>
                    <CFormInput
                      id="email"
                      className="mb-2"
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      invalid={!!emailError}
                      style={inputStyle}
                      type="email"
                    />
                    <CFormFeedback invalid>{emailError}</CFormFeedback>

                    <label htmlFor="password" style={{ color: '#333', fontWeight: 'normal', fontSize: '0.85rem' }}>Contraseña</label>
                    <CFormInput
                      id="password"
                      type="password"
                      className="mb-2"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      invalid={!!passwordError}
                      style={inputStyle}
                    />
                    <CFormFeedback invalid>{passwordError}</CFormFeedback>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <input type="checkbox" id="connected" className="mr-2" />
                        <label htmlFor="connected" className="ml-2" style={{ color: '#666', fontSize: '0.85rem', fontWeight: 'normal', marginLeft: '8px' }}>Permanecer conectado</label>
                      </div>
                    </div>

                    <div className="text-center mb-2">
                      <Link to="/password-recovery" className="text-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'normal' }}>
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>

                    <div className="text-center">
                      <CButton
                        color="primary"
                        type="submit"
                        style={{
                          width: '100%',
                          backgroundColor: '#007bff',
                          border: 'none',
                          padding: '10px', 
                          borderRadius: '5px',
                          fontWeight: 'normal',
                          fontSize: '0.9rem' 
                        }}
                      >
                        Ingresar
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignInSide;
