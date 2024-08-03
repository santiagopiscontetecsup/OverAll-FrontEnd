import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Roles_permission = React.lazy(() => import('./views/theme/Roles/Roles_Permisos'));
const ReportTable = React.lazy(() => import('./views/base/Reportes/Reporte'));
const FormControl = React.lazy(() => import('./views/forms/Reportes/Reporte_F1101'));
const ModifiedReportTable = React.lazy(() => import('./views/forms/Reportes_Modificados/Reportes_Modificados'));
const Report_empresa = React.lazy(() => import('./views/forms/Usuario/Reports'));
const CrearUsuarioPagina = React.lazy(() => import('./views/forms/NewUser/new_user'));
const Graficos = React.lazy(() => import('./views/Graficos/Graficos'));
const UserProfile = React.lazy(() => import('./views/notifications/Perfil/Perfil'));
const Badges = React.lazy(() => import('./views/notifications/Notificaciones/Notificaciones'));
const PasswordRecovery = React.lazy(() => import('./components/PasswordRecovery'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/form_newuser', name: 'New User', element: CrearUsuarioPagina },
  { path: '/roles_permission', name: 'Roles y Permisos', element: Roles_permission },
  { path: '/reportes', name: 'Reportes', element: ReportTable },
  { path: '/reports_emp', name: 'Reportes', element: Report_empresa },
  { path: '/graficos', name: 'Graficos', element: Graficos },
  { path: '/modified', name: 'Reportes Modificados', element: ModifiedReportTable },
  { path: '/form-control', name: 'Nuevo Reporte', element: FormControl },
  { path: '/perfil', name: 'Perfil', element: UserProfile },
  { path: '/notificaciones', name: 'Notificaciones', element: Badges },
  { path: '/password-recovery', name: 'Password Recovery', element: PasswordRecovery },
];

export default routes;
