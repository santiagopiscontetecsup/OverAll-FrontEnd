import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CAlert } from '@coreui/react';
import notifications from '../../../data/Notificaciones/notify'; // Asegúrate de que la ruta es correcta

const Notificaciones = () => {
  return (
    <CRow>
      <CCol lg={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Notificaciones</strong>
          </CCardHeader>
          <CCardBody>
            {notifications.map((notification) => (
              <CAlert key={notification.id} color={notification.color}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {notification.message}
                  </div>
                  <div className="text-muted small" style={{ color: '#000000' }}>
                    {notification.time}
                  </div>
                </div>
              </CAlert>
            ))}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Notificaciones;
