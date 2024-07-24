import React from 'react'
import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton } from '@coreui/react'

const statusStyles = {
  Borrador: { backgroundColor: '#6c757d', color: '#fff' }, 
  Pendiente: { backgroundColor: '#ffc107', color: '#000' },
  Enviado: { backgroundColor: '#28a745', color: '#fff' } 
}

const buttonStyles = {
  view: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 4px',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
      backgroundColor: '#0056b3',
      borderColor: '#004085',
    }
  },
  download: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 4px',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
      backgroundColor: '#218838',
      borderColor: '#1e7e34',
    }
  }
}

const modifiedReports = [
  {
    name: 'Reporte A123',
    status: 'Borrador', 
    modifiedDate: 'Jul 10, 2024',
    modifiedBy: 'Santiago',
  },
  {
    name: 'Reporte B456',
    status: 'Pendiente', 
    modifiedDate: 'Jul 15, 2024',
    modifiedBy: 'Santiago',
  },
  {
    name: 'Reporte C789',
    status: 'Enviado', 
    modifiedDate: 'Jul 20, 2024',
    modifiedBy: 'Santiago',
  }
]

const ModifiedReportTable = () => {
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Reportes Modificados</strong>
      </CCardHeader>
      <CCardBody>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead className="text-nowrap">
            <CTableRow>
              <CTableHeaderCell>Nombre del Reporte</CTableHeaderCell>
              <CTableHeaderCell>Estado</CTableHeaderCell>
              <CTableHeaderCell>Fecha de Modificación</CTableHeaderCell>
              <CTableHeaderCell>Acción</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {modifiedReports.map((report, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{report.name}</CTableDataCell>
                <CTableDataCell className="text-center">
                  <div 
                    style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      backgroundColor: statusStyles[report.status].backgroundColor, 
                      color: statusStyles[report.status].color,
                      textAlign: 'center', 
                      lineHeight: '12px' 
                    }}
                    title={report.status}
                  >
                    {report.status.charAt(0).toUpperCase()}
                  </div>
                </CTableDataCell>
                <CTableDataCell>{report.modifiedDate}</CTableDataCell>
                <CTableDataCell className="text-center">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CButton 
                      color="primary" 
                      style={buttonStyles.view} 
                      className="me-2"
                    >
                      Ver
                    </CButton>
                    <CButton 
                      color="success" 
                      style={buttonStyles.download}
                    >
                      Descargar
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default ModifiedReportTable