import React from 'react'
import classNames from 'classnames'

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilCloudDownload,
} from '@coreui/icons'

import overviewImg from '/overview.png'  
import MainChart from './MainChart'

const DashboardUser = () => {
  const inspectionProgress = [
    { title: 'Completadas', value: '120 Inspecciones', percent: 60, color: 'success' },
    { title: 'Pendientes', value: '80 Inspecciones', percent: 40, color: 'warning' },
    { title: 'En Proceso', value: '50 Inspecciones', percent: 25, color: 'info' },
    { title: 'Rechazadas', value: '10 Inspecciones', percent: 5, color: 'danger' },
  ]

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <h4>Última Parada</h4>
              <p>10/08/2023</p>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <h4>Equipos Programados</h4>
              <p>03</p>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <h4>Inspecciones no programadas</h4>
              <p>02</p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="inspections" className="card-title mb-0">
                Resumen de Inspecciones
              </h4>
              <div className="small text-body-secondary">Enero - Julio 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Chancado', 'Molienda', 'Filtro', 'Moly', 'Flotación'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Molienda'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {inspectionProgress.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Inspecciones {' & '} Desempeño</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <div className="mb-5">
                    <div className="text-body-secondary">Flowsheet</div>
                    <img src={overviewImg} alt="Flowsheet" style={{ width: '100%', height: 'auto' }} />
                    <CButton color="primary" className="mt-2">
                      Ir a ver
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardUser
