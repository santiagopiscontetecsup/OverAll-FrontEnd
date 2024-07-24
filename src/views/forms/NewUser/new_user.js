import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
  CAlert,
} from '@coreui/react'

const CrearUsuario = () => {
  const [validated, setValidated] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setErrorMessage('Por favor, completa todos los campos correctamente.')
      setSuccessMessage('')
    } else {
      event.preventDefault()
      setSuccessMessage('Usuario creado exitosamente.')
      setErrorMessage('')
      // lógica para crear el usuario, como enviar los datos a un servidor
    }
    setValidated(true)
  }
  
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
          <CFormLabel htmlFor="username">Nombre de usuario</CFormLabel>
          <CFormInput type="text" id="username" placeholder="Introduce el nombre de usuario" required />
          <CFormFeedback invalid>Por favor, proporciona un nombre de usuario válido.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="email">Correo electrónico</CFormLabel>
          <CFormInput type="email" id="email" placeholder="Introduce el correo electrónico" required />
          <CFormFeedback invalid>Por favor, proporciona una dirección de correo electrónico válida.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="password">Contraseña</CFormLabel>
          <CFormInput type="password" id="password" placeholder="Introduce la contraseña" required />
          <CFormFeedback invalid>Por favor, proporciona una contraseña válida.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="confirmPassword">Confirmar Contraseña</CFormLabel>
          <CFormInput type="password" id="confirmPassword" placeholder="Confirma la contraseña" required />
          <CFormFeedback invalid>Las contraseñas no coinciden.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="role">Rol</CFormLabel>
          <CFormSelect id="role" required>
            <option disabled>Selecciona un rol...</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
            <option value="analyst">Analista</option>
            <option value="inspector">Inspector</option>
          </CFormSelect>
          <CFormFeedback invalid>Por favor, selecciona un rol.</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="terms"
            label="Acepto los términos y condiciones"
            required
          />
          <CFormFeedback invalid>Debes aceptar los términos antes de enviar.</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Crear Usuario
          </CButton>
        </CCol>
      </CForm>
    </>
  )
}

const CrearUsuarioPagina = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Crear Nuevo Usuario</strong>
          </CCardHeader>
          <CCardBody>
            <CrearUsuario />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CrearUsuarioPagina
