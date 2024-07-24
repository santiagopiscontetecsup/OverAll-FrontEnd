import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CFormSelect, CFormInput, CButton } from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const roles = ['Administrador', 'Usuario', 'Analista', 'Inspector']

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Juan Pérez',
      role: 'Administrador',
      age: 30,
      registered: 'Ene 1, 2023',
    },
    country: { name: 'USA', flag: 'cif-us' },
    usage: {
      value: 50,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'success',
    },
    payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
    activity: 'Hace 10 segundos',
  },
  {
    avatar: { src: avatar2, status: 'danger' },
    user: {
      name: 'Ana Gómez',
      role: 'Usuario',
      age: 45,
      registered: 'Ene 1, 2023',
    },
    country: { name: 'Brasil', flag: 'cif-br' },
    usage: {
      value: 22,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'info',
    },
    payment: { name: 'Visa', icon: 'cib-cc-visa' },
    activity: 'Hace 5 minutos',
  },
  {
    avatar: { src: avatar3, status: 'warning' },
    user: {
      name: 'Carlos Ruiz',
      role: 'Analista',
      age: 28,
      registered: 'Feb 14, 2023',
    },
    country: { name: 'Reino Unido', flag: 'cif-gb' },
    usage: {
      value: 35,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'warning',
    },
    payment: { name: 'American Express', icon: 'cib-cc-amex' },
    activity: 'Hace 20 minutos',
  },
  {
    avatar: { src: avatar4, status: 'primary' },
    user: {
      name: 'Sofía Martínez',
      role: 'Inspector',
      age: 32,
      registered: 'Mar 7, 2023',
    },
    country: { name: 'España', flag: 'cif-es' },
    usage: {
      value: 40,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'primary',
    },
    payment: { name: 'Discover', icon: 'cib-cc-discover' },
    activity: 'Hace 1 hora',
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Laura Gómez',
      role: 'Usuario',
      age: 29,
      registered: 'Abr 22, 2023',
    },
    country: { name: 'Francia', flag: 'cif-fr' },
    usage: {
      value: 28,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'success',
    },
    payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
    activity: 'Hace 2 horas',
  },
  {
    avatar: { src: avatar6, status: 'danger' },
    user: {
      name: 'David López',
      role: 'Administrador',
      age: 36,
      registered: 'Jun 5, 2023',
    },
    country: { name: 'Alemania', flag: 'cif-de' },
    usage: {
      value: 55,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'danger',
    },
    payment: { name: 'Visa', icon: 'cib-cc-visa' },
    activity: 'Hace 30 minutos',
  },
]

const Roles_permission = () => {
  const [users, setUsers] = useState(tableExample)

  const handleRoleChange = (index, event) => {
    const newUsers = [...users]
    newUsers[index].user.role = event.target.value
    setUsers(newUsers)
  }

  const handleAgeChange = (index, event) => {
    const newUsers = [...users]
    newUsers[index].user.age = event.target.value
    setUsers(newUsers)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Usuarios
        </CCardHeader>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  <i className="cil cil-people"></i>
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Nombre Completo</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Edad
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Cargo</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Actividad</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Acción
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {users.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <img src={item.avatar.src} alt="avatar" className={`avatar ${item.avatar.status}`} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.user.name}</div>
                    <div className="small text-body-secondary text-nowrap">
                      Registrado: {item.user.registered}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CFormInput 
                      type="number" 
                      value={item.user.age} 
                      onChange={(e) => handleAgeChange(index, e)} 
                      className="text-center"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormSelect 
                      value={item.user.role} 
                      onChange={(e) => handleRoleChange(index, e)} 
                    >
                      {roles.map((role, idx) => (
                        <option key={idx} value={role}>{role}</option>
                      ))}
                    </CFormSelect>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="small text-body-secondary text-nowrap">Último inicio de sesión</div>
                    <div className="fw-semibold text-nowrap">{item.activity}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton color="primary">Editar</CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Roles_permission
