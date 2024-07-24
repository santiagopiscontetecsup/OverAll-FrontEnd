import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Roles_permission = React.lazy(() => import('./views/theme/Roles/Roles_Permisos'))

// Base
const ReportTable = React.lazy(() => import('./views/base/Reportes/Reporte'))

//Forms
const FormControl = React.lazy(() => import('./views/forms/Reportes/Reporte_F1101'))
const ModifiedReportTable = React.lazy(() => import('./views/forms/Reportes_Modificados/Reportes_Modificados'))
const Report_empresa = React.lazy(() => import('./views/forms/Usuario/Reports'))
const CrearUsuarioPagina = React.lazy(() => import('./views/forms/NewUser/new_user'))

const Graficos = React.lazy(() => import('./views/Graficos/Graficos'))

// Notifications
const UserProfile = React.lazy(() => import('./views/notifications/Perfil/Perfil'))
const Badges = React.lazy(() => import('./views/notifications/Notificaciones/Notificaciones'))

const routes = [
  // Rutas principales
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // Rutas Administración 
  { path: '/form_newuser', name: 'New User', element: CrearUsuarioPagina },
  { path: '/roles_permission', name: 'Roles y Permisos', element: Roles_permission },
  // Rutas Analista
  { path: '/reportes', name: 'Reportes', element: ReportTable },
  // Rutas para Usuario
  { path: '/reports_emp', name: 'Reportes', element: Report_empresa },
  { path: '/graficos', name: 'Graficos', element: Graficos },
  // Rutas de Inspector
  { path: '/modified', name: 'Reportes Modificados', element: ModifiedReportTable },
  { path: '/form-control', name: 'Form Control', element: FormControl },
  // Rutas de Perfil
  { path: '/perfil', name: 'Perfil', element: UserProfile },
  { path: '/notificaciones', name: 'Notificaciones', element: Badges },
  //{ path: '/mensajes', name: 'Mensajes', element: Badges },
]

export default routes
