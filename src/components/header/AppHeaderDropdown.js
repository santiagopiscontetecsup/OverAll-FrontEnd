import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
} from '@coreui/react';
import {
  cilUser,
  cilAccountLogout,
  cilChartLine, 
  cilSearch,  
  cilFactory ,   
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import avatar8 from './../../assets/images/avatars/LOG02.png';
import { useAuth } from '../../components/AuthProvider'; 

const AppHeaderDropdown = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); 
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <>
      <CDropdown variant="nav-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', marginRight: '8px' }}>
            <CIcon icon={cilChartLine} className="me-2" onClick={() => navigate('/confidencialidad')} />
            <li className="nav-item py-1">
              <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
            </li>
            <CIcon icon={cilSearch} className="me-2" onClick={() => navigate('/buscador')} />
            <li className="nav-item py-1">
              <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
            </li>
            <CIcon icon={cilFactory} className="me-2" onClick={() => navigate('/flujograma')} />
          </div>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
            <CAvatar
              src={avatar8}
              size="md"
              style={{ borderRadius: '50%' }} 
            />
          </CDropdownToggle>
        </div>

        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
          <CDropdownItem onClick={() => navigate('/perfil')}>
            <CIcon icon={cilUser} className="me-2" />
            Perfil
          </CDropdownItem>
          
          <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Cerrar Sesión</CDropdownHeader>
          <CDropdownItem onClick={handleLogout}>
            <CIcon icon={cilAccountLogout} className="me-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CModal visible={visible} onClose={() => setVisible(false)}>
      </CModal>
    </>
  );
}

export default AppHeaderDropdown;
