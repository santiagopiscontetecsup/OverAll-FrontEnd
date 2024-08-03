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
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
  CFormFeedback
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { Link } from 'react-router-dom';

const SignInSide = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const companies = [
    { companyName: 'Cerro Verde', logo: 'logo_cerroverde.png' },
    { companyName: 'Bambas', logo: 'bambas.png' },
    { companyName: 'OverAll Solutions', logo: 'logo_principal.png' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    setCompanyError('');
    setLoginError('');

    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    if (!selectedCompany) {
      setCompanyError('Please select your company.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const isAuthenticated = login(email, password, selectedCompany);
    if (isAuthenticated) {
      navigate('/dashboard'); 
    } else {
      setLoginError('El usuario, contraseña o la empresa no son correctas.');
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(email);
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center" style={{ backgroundImage: 'url(/fondo_pag.jpg)', backgroundSize: 'cover' }}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4" style={{ width: '100%', maxWidth: '500px', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CCardBody>
                  <div className="text-center mb-4">
                    <img src="/logo_empresa.png" alt="Static Logo" style={{ width: '150px' }} />
                  </div>
                  <CForm onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4" style={{ color: '#333', fontSize: '2.0rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Ingreso al Sistema</h1>
                    <p className="text-center text-secondary mb-4">Bienvenido al sistema de OverAll Solutions</p>
                    {loginError && <p className="text-center text-danger mb-4">{loginError}</p>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{ backgroundColor: 'black' }}>
                        <CIcon icon={cilUser} style={{ color: 'white' }} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        invalid={!!emailError}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black' }}
                      />
                      <CFormFeedback invalid>{emailError}</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText style={{ backgroundColor: 'black' }}>
                        <CIcon icon={cilLockLocked} style={{ color: 'white' }} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        invalid={!!passwordError}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black' }}
                      />
                      <CFormFeedback invalid>{passwordError}</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText style={{ backgroundColor: 'white' }}>
                        {selectedCompany && (
                          <img src={`/${companies.find(c => c.companyName === selectedCompany)?.logo}`} alt="Company Logo" style={{ width: '24px' }} />
                        )}
                      </CInputGroupText>
                      <CFormSelect
                        value={selectedCompany}
                        onChange={handleCompanyChange}
                        aria-label="Select Your Company"
                        invalid={!!companyError}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black' }}
                      >
                        <option value="">Select Your Company</option>
                        {companies.map((company) => (
                          <option key={company.companyName} value={company.companyName}>
                            {company.companyName}
                          </option>
                        ))}
                      </CFormSelect>
                      <CFormFeedback invalid>{companyError}</CFormFeedback>
                    </CInputGroup>
                    <CRow className="mt-4">
                      <CCol xs={6}>
                        <CButton 
                          color="primary" 
                          className="px-3"
                          type="submit" 
                          style={{ backgroundColor: 'rgba(0, 123, 255, 0.8)', borderColor: 'rgba(0, 123, 255, 0.8)', width: '100%' }}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/password-recovery" className="text-primary" style={{ textDecoration: 'none' }}>¿Olvidaste tu Contraseña?</Link>
                      </CCol>
                    </CRow>
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
