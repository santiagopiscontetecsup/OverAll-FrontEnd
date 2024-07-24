import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton, CRow } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilDescription } from '@coreui/icons' 

const buttonStyles = {
  download: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 auto',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
      backgroundColor: '#218838',
      borderColor: '#1e7e34',
    }
  },
  icon: {
    marginRight: '6px',
  }
}

const ranges = [
  {
    name: 'Faja F1101',
    sendDate: 'Jul 10, 2024',
  },
  {
    name: 'Faja F1102',
    sendDate: 'Jul 15, 2024',
  },
  {
    name: 'Faja F1501',
    sendDate: 'Jul 20, 2024',
  }
]

const Report_empresa = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lista de Reportes</strong>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead className="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell>Nombre</CTableHeaderCell>
                  <CTableHeaderCell>Fecha de Envío</CTableHeaderCell>
                  <CTableHeaderCell>Acción</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {ranges.map((range, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{range.name}</CTableDataCell>
                    <CTableDataCell>{range.sendDate}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CButton 
                          color="success" 
                          style={buttonStyles.download}
                        >
                          <CIcon icon={cilDescription} style={buttonStyles.icon} />
                          Descargar PDF
                        </CButton>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Report_empresa
