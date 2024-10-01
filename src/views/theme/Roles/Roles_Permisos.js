import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CCard, CCardHeader, CCardBody, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilTrash, cilPencil } from '@coreui/icons';
import avatar1 from 'src/assets/images/avatars/1.jpg';
import avatar2 from 'src/assets/images/avatars/2.jpg';
import avatar3 from 'src/assets/images/avatars/3.jpg';
import avatar4 from 'src/assets/images/avatars/4.jpg';
import avatar5 from 'src/assets/images/avatars/5.jpg';
import avatar6 from 'src/assets/images/avatars/6.jpg';

const tableExample = [
  {
    id: 1,
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Juan Pérez',
      role: 'Administrador',
      registered: 'Ene 1, 2023',
    },
    activity: 'Hace 10 segundos',
  },
  {
    id: 2,
    avatar: { src: avatar2, status: 'danger' },
    user: {
      name: 'Ana Gómez',
      role: 'Usuario',
      registered: 'Ene 1, 2023',
    },
    activity: 'Hace 5 minutos',
  },
  {
    id: 3,
    avatar: { src: avatar3, status: 'warning' },
    user: {
      name: 'Carlos Ruiz',
      role: 'Analista',
      registered: 'Feb 14, 2023',
    },
    activity: 'Hace 20 minutos',
  },
  {
    id: 4,
    avatar: { src: avatar4, status: 'primary' },
    user: {
      name: 'Sofía Martínez',
      role: 'Inspector',
      registered: 'Mar 7, 2023',
    },
    activity: 'Hace 1 hora',
  },
  {
    id: 5,
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Laura Gómez',
      role: 'Usuario',
      registered: 'Abr 22, 2023',
    },
    activity: 'Hace 2 horas',
  },
  {
    id: 6,
    avatar: { src: avatar6, status: 'danger' },
    user: {
      name: 'David López',
      role: 'Administrador',
      registered: 'Jun 5, 2023',
    },
    activity: 'Hace 30 minutos',
  },
];

const Roles_permission = () => {
  const [users, setUsers] = useState(tableExample);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  const handleEdit = (index) => {
    navigate(`/editar-usuario/${users[index].id}`);
  };

  return (
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
              <CTableHeaderCell className="bg-body-tertiary">Cargo</CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary">Actividad</CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Acción
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableDataCell className="text-center">
                  <img src={item.avatar.src} alt="avatar" className={`avatar ${item.avatar.status}`} />
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.user.name}</div>
                  <div className="small text-body-secondary text-nowrap">
                    Registrado: {item.user.registered}
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  {item.user.role}
                </CTableDataCell>
                <CTableDataCell>
                  <div className="small text-body-secondary text-nowrap">Último inicio de sesión</div>
                  <div className="fw-semibold text-nowrap">{item.activity}</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton color="link" onClick={() => handleEdit(index)}>
                    <CIcon icon={cilPencil} />
                  </CButton>
                  <CButton color="link" onClick={() => handleDelete(index)}>
                    <CIcon icon={cilTrash} />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
}

export default Roles_permission;
