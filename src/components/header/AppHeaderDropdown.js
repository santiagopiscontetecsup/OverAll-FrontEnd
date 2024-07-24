import React, { useState } from 'react';
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
} from '@coreui/react';
import {
  cilBell,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import avatar8 from './../../assets/images/avatars/logo_principal.png';
import notifications from "../../data/Notificaciones/notify";

const AppHeaderDropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar
            src={avatar8}
            size="md"
            style={{ borderRadius: '50%' }} // Aplicar estilo para redondear
          />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
          <CDropdownItem href="#" onClick={() => setVisible(true)}>
            <CIcon icon={cilBell} className="me-2" />
            Notificaciones
            <CBadge color="info" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilTask} className="me-2" />
            Reportes en proceso
            <CBadge color="danger" className="ms-2">
              2
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            Perfil
          </CDropdownItem>
          <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Cerrar Sesión</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilAccountLogout} className="me-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader closeButton>Notificaciones</CModalHeader>
        <CModalBody>
          <CListGroup>
            {notifications.map((notification) => (
              <CListGroupItem key={notification.id}>
                <div>{notification.message}</div>
                <div className="small text-body-secondary" style={{ color: '#6c757d' }}>
                  {notification.time}
                </div>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CModalBody>
      </CModal>
    </>
  );
}

export default AppHeaderDropdown;
