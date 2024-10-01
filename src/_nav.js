import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilAccountLogout,
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import { useAuth } from './components/AuthProvider'; 
import { useNavigate } from 'react-router-dom';

const contrato = [
  { name: 'Bambas', to: '/buscador' },
  { name: 'OverAll Solutions', to: '/buscador' },
];


const areas = [
  { name: 'Chancado', to: '/buscador' },
  { name: 'Molienda', to: '/buscador' },
  { name: 'Filtro', to: '/buscador' },
  { name: 'Moly', to: '/buscador' },
  { name: 'Flotación', to: '/buscador' },
];

const _nav = () => {
  const { logout } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return [
    {
      component: CNavItem,
      name: 'Home',
      to: '/dashboard',
      icon: <HomeIcon className="nav-icon" />,
      roles: ['Administrador'],
    },
    {
      component: CNavItem,
      name: 'Home',
      to: '/dashboardSupervisor',
      icon: <HomeIcon className="nav-icon" />,
      roles: ['Supervisor'],
    },
    {
      component: CNavItem,
      name: 'Home',
      to: '/dashboardUser',
      icon: <HomeIcon className="nav-icon" />,
      roles: ['Usuario'],
    },

    // Usuario (Cliente)
    {
      component: CNavTitle,
      name: 'Usuario',
      roles: ['Usuario'],
    },
    {
      component: CNavGroup,
      name: 'Contrato',
      icon: <GroupIcon className="nav-icon" />,
      roles: ['Usuario'],
      items: [
        {
          component: CNavItem,
          name: contrato[0].name, 
          to: contrato[0].to,
          roles: ['Usuario'],
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Area',
      icon: <BusinessIcon className="nav-icon" />,
      roles: ['Usuario'],
      items: [
        {
          component: CNavItem,
          name: areas[0].name, // Chancado
          to: areas[0].to,
          roles: ['Usuario'],
        },
      ],
    },
    {
      component: CNavItem,
      name: 'Reporte',
      to: '/reports_emp',
      icon: <AssignmentIcon className="nav-icon" />,
      roles: ['Usuario'],
    },
    {
      component: CNavItem,
      name: 'Confiabilidad',
      to: '/confiabilidad',
      icon: <VerifiedUserIcon className="nav-icon" />,
      roles: ['Usuario'],
    },
    {
      component: CNavItem,
      name: 'Buscador',
      to: '/buscador',
      icon: <SearchIcon className="nav-icon" />,
      roles: ['Usuario'],
    },

    // Administrador
    {
      component: CNavTitle,
      name: 'Administrador',
      roles: ['Administrador'],
    },
    {
      component: CNavGroup,
      name: 'Contrato',
      icon: <GroupIcon className="nav-icon" />,
      roles: ['Administrador'],
      items: contrato.map(contrato => ({
        component: CNavItem,
        name: contrato.name,
        to: contrato.to,
        roles: ['Administrador'],
      })),
    },
    {
      component: CNavGroup,
      name: 'Area',
      icon: <BusinessIcon className="nav-icon" />,
      roles: ['Administrador'],
      items: areas.map(area => ({
        component: CNavItem,
        name: area.name,
        to: area.to,
        roles: ['Administrador'],
      })),
    },
    {
      component: CNavItem,
      name: 'Programar Parada',
      to: '/programar-parada',
      icon: <CalendarTodayIcon className="nav-icon" />,
      roles: ['Administrador'],
    },
    {
      component: CNavItem,
      name: 'Inspecciones no programadas',
      to: '/inspecciones-no-programadas',
      icon: <AssignmentLateIcon className="nav-icon" />,
      roles: ['Administrador'],
    },
    {
      component: CNavItem,
      name: 'Nuevo Usuario',
      to: '/form_newuser',
      icon: <PersonAddIcon className="nav-icon" />,
      roles: ['Administrador'],
    },
    {
      component: CNavItem,
      name: 'Roles y Permisos',
      to: '/roles_permission',
      icon: <EditIcon className="nav-icon" />,
      roles: ['Administrador'],
    },

    // Analista
    {
      component: CNavTitle,
      name: 'Analista',
      roles: ['Analista'],
    },
    {
      component: CNavGroup,
      name: 'Contrato',
      icon: <GroupIcon className="nav-icon" />,
      roles: ['Analista'],
      items: [
        {
          component: CNavItem,
          name: contrato[1].name, // Molienda
          to: contrato[1].to,
          roles: ['Analista'],
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Area',
      icon: <BusinessIcon className="nav-icon" />,
      roles: ['Analista'],
      items: [
        {
          component: CNavItem,
          name: areas[1].name, // Molienda
          to: areas[1].to,
          roles: ['Analista'],
        },
      ],
    },
    {
      component: CNavItem,
      name: 'Inspeccion No Programada',
      to: '/inspeccion-no-programada',
      icon: <AssignmentIcon className="nav-icon" />,
      roles: ['Analista'],
    },
    {
      component: CNavItem,
      name: 'Curva S',
      to: '/curva-s',
      icon: <ShowChartIcon className="nav-icon" />,
      roles: ['Analista'],
    },

    // Supervisor
    {
      component: CNavTitle,
      name: 'Supervisor',
      roles: ['Supervisor'],
    },
    {
      component: CNavGroup,
      name: 'Contrato',
      icon: <GroupIcon className="nav-icon" />,
      roles: ['Supervisor'],
      items: [
        {
          component: CNavItem,
          name: contrato[1].name, // Filtro
          to: contrato[1].to,
          roles: ['Supervisor'],
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Area',
      icon: <BusinessIcon className="nav-icon" />,
      roles: ['Supervisor'],
      items: [
        {
          component: CNavItem,
          name: areas[2].name, // Filtro
          to: areas[2].to,
          roles: ['Supervisor'],
        },
      ],
    },
    {
      component: CNavItem,
      name: 'Inspeccion No Programada',
      to: '/inspeccion-no-programada',
      icon: <AssignmentIcon className="nav-icon" />,
      roles: ['Supervisor'],
    },
    {
      component: CNavItem,
      name: 'Curva S',
      to: '/curva-s',
      icon: <ShowChartIcon className="nav-icon" />,
      roles: ['Supervisor'],
    },

    // Inspector
    {
      component: CNavTitle,
      name: 'Inspector',
      roles: ['Inspector'],
    },
    {
      component: CNavGroup,
      name: 'Contrato',
      icon: <BusinessIcon className="nav-icon" />,
      roles: ['Inspector'],
      items: [
        {
          component: CNavItem,
          name: contrato[1].name, // Flotación
          to: contrato[1].to,
          roles: ['Inspector'],
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Area',
      icon: <BusinessIcon className="nav-icon" />,
      roles: ['Inspector'],
      items: [
        {
          component: CNavItem,
          name: areas[4].name, // Flotación
          to: areas[4].to,
          roles: ['Inspector'],
        },
      ],
    },
    {
      component: CNavItem,
      name: 'Reporte',
      to: '/reporte',
      icon: <AssignmentIcon className="nav-icon" />,
      roles: ['Inspector'],
    },

    // Profile and Sign Up (For all roles)
    {
      component: CNavTitle,
      name: 'Perfil',
    },
    {
      component: CNavItem,
      name: 'Profile',
      to: '/perfil',
      icon: <PermIdentityIcon className="nav-icon" />,
      roles: ['Administrador', 'Analista', 'Supervisor', 'Inspector', 'Usuario'],
    },

    // Logout
    {
      component: CNavItem,
      name: 'Logout',
      to: '/login',
      icon: <CIcon icon={cilAccountLogout} className="nav-icon" />,
      roles: ['Administrador', 'Analista', 'Supervisor', 'Inspector', 'Usuario'],
      onClick: handleLogout, // Añadir la función de logout aquí
    },
  ];
};

export default _nav;
