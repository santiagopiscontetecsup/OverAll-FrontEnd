import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilChartPie,
  cilPencil,
  cilUserFollow,
  cilUser,
  cilClipboard,
  cilDescription,
  cilPlaylistAdd,
  cilNewspaper,
  cilHome
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Perfil',
  },
  {
    component: CNavGroup,
    name: 'Perfil',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mi Perfil',
        to: '/perfil',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notificaciones',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mis Notificaciones',
        to: '/Notificaciones',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Administrador',
  },
  {
    component: CNavGroup,
    name: 'Nuevo Usuario',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Nuevo',
        to: '/form_newuser',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Roles y Permisos',
    to: '/roles_permission',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Analista',
  },
  {
    component: CNavGroup, 
    name: 'Lista de Reportes',
    to: '/analista',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Reportes',
        to: '/reportes',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Inspector',
  },
  {
    component: CNavGroup,
    name: 'Reportes Modificados',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Modificados',
        to: '/modified',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Crear Nuevo Reporte',
    icon: <CIcon icon={cilPlaylistAdd} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Nuevo Reporte',
        to: '/form-control',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Usuario',
  },
  {
    component: CNavItem,
    name: 'Graficos',
    to: '/graficos',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Lista de Reportes',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Reportes',
        to: '/reports_emp',
      },
    ],
  },
]

export default _nav
