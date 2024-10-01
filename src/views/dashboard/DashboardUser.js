import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilCalendar,
  cilSettings,
  cilClipboard,
} from '@coreui/icons'

import overviewImg from '/overview.png'
import MainChart from './MainChart'

const DashboardUser = () => {
  const squareIconStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#007bff',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
  }

  // Estilo para el contenedor de FlowSheet con la altura ajustada
  const flowSheetStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(' + overviewImg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    color: 'white',
    height: '420px', 
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
  }

  const buttonStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#007bff',
    border: 'none',
    fontSize: '0.9rem', 
    padding: '10px 20px', 
  }

  return (
    <>
      {/* Tarjetas principales */}
      <CRow className="mb-4">
        <CCol>
          <CCard>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="fw-bold">Última Parada</h4>
                <p className="fs-5">10/08/2023</p>
              </div>
              <div style={squareIconStyle}>
                <CIcon icon={cilCalendar} size="xl" className="text-white" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="fw-bold">Equipos Programados</h4>
                <p className="fs-5">03</p>
              </div>
              <div style={squareIconStyle}>
                <CIcon icon={cilSettings} size="xl" className="text-white" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="fw-bold">Inspecciones no programadas</h4>
                <p className="fs-5">02</p>
              </div>
              <div style={squareIconStyle}>
                <CIcon icon={cilClipboard} size="xl" className="text-white" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Resumen de Inspecciones y FlowSheet */}
      <CRow className="mt-4">
        <CCol md={6} className="mb-4">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <h4 id="inspections" className="card-title mb-0 fw-bold">
                    Estado de los Componentes
                  </h4>
                </CCol>
              </CRow>
              <MainChart />
            </CCardBody>
          </CCard>
        </CCol>

        {/* FlowSheet con imagen y botón "Go to Overview" */}
        <CCol md={6} className="mb-4">
          <CCard style={{ background: 'transparent', border: 'none' }}>
            <CCardBody style={flowSheetStyle}>
              <CButton color="primary" className="mt-2" style={buttonStyle}>
                Go to Overview
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardUser
