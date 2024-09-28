import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import MainChart from './MainChart'

const Dashboard = () => {
  const inspectionProgress = [
    { title: 'Completadas', value: '120 Inspecciones', percent: 60, color: 'success' },
    { title: 'Pendientes', value: '80 Inspecciones', percent: 40, color: 'warning' },
    { title: 'En Proceso', value: '50 Inspecciones', percent: 25, color: 'info' },
    { title: 'Rechazadas', value: '10 Inspecciones', percent: 5, color: 'danger' },
  ]

  const progressGroupExample1 = [
    { title: 'Lunes', value1: 34, value2: 78 },
    { title: 'Martes', value1: 56, value2: 94 },
    { title: 'Miércoles', value1: 12, value2: 67 },
    { title: 'Jueves', value1: 43, value2: 91 },
    { title: 'Viernes', value1: 22, value2: 73 },
    { title: 'Sábado', value1: 53, value2: 82 },
    { title: 'Domingo', value1: 9, value2: 69 },
  ]

  const inspectorPerformance = [
    { title: 'Inspector A', icon: cilUser, value: 53 },
    { title: 'Inspector B', icon: cilUserFemale, value: 43 },
  ]

  const inspectionsTable = [
    {
      avatar: { src: avatar1, status: 'success' },
      inspector: {
        name: 'Luis Fernández',
        new: true,
        registered: 'Jan 1, 2023',
      },
      location: 'USA',
      status: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      completion: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      inspector: {
        name: 'Ana María Flores',
        new: false,
        registered: 'Jan 1, 2023',
      },
      location: 'Brazil',
      status: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'danger' },
      completion: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      inspector: {
        name: 'Carlos Pérez',
        new: true,
        registered: 'Jan 1, 2023',
      },
      location: 'India',
      status: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
      completion: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      inspector: {
        name: 'María Gómez',
        new: true,
        registered: 'Jan 1, 2023',
      },
      location: 'France',
      status: { value: 98, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'danger' },
      completion: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      inspector: {
        name: 'José Ramírez',
        new: true,
        registered: 'Jan 1, 2023',
      },
      location: 'Spain',
      status: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'primary' },
      completion: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      inspector: {
        name: 'Carmen Rodríguez',
        new: true,
        registered: 'Jan 1, 2023',
      },
      location: 'Poland',
      status: { value: 43, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      completion: 'Last week',
    },    
  ]

  return (
    <>
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
                {['Día', 'Mes', 'Año'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Mes'}
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
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">Nuevas Inspecciones</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                          Inspecciones Recurrentes
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <div className="mb-5">
                    <div className="text-body-secondary">Rendimiento de Inspectores</div>
                    {inspectorPerformance.map((item, index) => (
                      <div className="progress-group mb-4" key={index}>
                        <div className="progress-group-header">
                          <CIcon icon={item.icon} className="me-2 text-primary" />
                          <span>{item.title}</span>
                          <span className="ms-auto fw-semibold">
                            {item.value}
                            <span className="text-body-secondary small ms-2">Inspecciones</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress thin color="primary" value={item.value} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CCol>
              </CRow>
              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
