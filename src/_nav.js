import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilChartPie,
  cilPencil,
  cilUserFollow,
  cilUser,
  cilClipboard,
  cilDescription,
  cilPlaylistAdd,
  cilNewspaper,
  cilHome,
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const _nav = [
  // Home for all roles
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <HomeIcon className="nav-icon" />,
    roles: ['Administrador', 'Analista', 'Supervisor', 'Inspector', 'Usuario'],
  },

  // Usuario (Cliente)
  {
    component: CNavTitle,
    name: 'Usuario',
    roles: ['Usuario'],
  },
  {
    component: CNavItem,
    name: 'Area',
    to: '/area',
    icon: <BusinessIcon className="nav-icon" />,
    roles: ['Usuario'],
  },
  {
    component: CNavItem,
    name: 'Reporte',
    to: '/reporte',
    icon: <AssignmentIcon className="nav-icon" />,
    roles: ['Usuario'],
  },
  {
    component: CNavItem,
    name: 'Equipo',
    to: '/equipo',
    icon: <EngineeringIcon className="nav-icon" />,
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

  // Analista
  {
    component: CNavTitle,
    name: 'Analista',
    roles: ['Analista'],
  },
  {
    component: CNavItem,
    name: 'Contrato',
    to: '/contrato',
    icon: <GroupIcon className="nav-icon" />,
    roles: ['Analista'],
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
    component: CNavItem,
    name: 'Contrato',
    to: '/contrato',
    icon: <GroupIcon className="nav-icon" />,
    roles: ['Supervisor'],
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
    component: CNavItem,
    name: 'Contrato',
    to: '/contrato',
    icon: <GroupIcon className="nav-icon" />,
    roles: ['Inspector'],
  },
  {
    component: CNavItem,
    name: 'Area',
    to: '/area',
    icon: <BusinessIcon className="nav-icon" />,
    roles: ['Inspector'],
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
  {
    component: CNavItem,
    name: 'Sign Up',
    to: '/sign-up',
    icon: <HowToRegIcon className="nav-icon" />,
    roles: ['Administrador', 'Analista', 'Supervisor', 'Inspector', 'Usuario'],
  },
];

export default _nav;
