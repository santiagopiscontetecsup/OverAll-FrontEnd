import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormSelect,
  CFormInput,
  CButton,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons"; 
import { FaEye } from 'react-icons/fa'; 

const areas = [
  { name: 'Chancado' },
  { name: 'Molienda' },
  { name: 'Filtro' },
  { name: 'Flotación' },
  { name: 'Moly' }
];

const components = [
  { name: 'Faja' },
  { name: 'Polea' },
  { name: 'MLB' },
  { name: 'Eje' }
];

const stops = [
  { name: '2024 - 1' },
  { name: '2024 - 2' }
];

const statusStyles = {
  Advertencia: { borderLeft: '5px solid #ffc107', paddingLeft: '10px', color: '#ffc107' },
  Bueno: { borderLeft: '5px solid #28a745', paddingLeft: '10px', color: '#28a745' },
  Peligro: { borderLeft: '5px solid #dc3545', paddingLeft: '10px', color: '#dc3545' },
};

const statuses = [
  { name: 'Bueno' },
  { name: 'Advertencia' },
  { name: 'Peligro' },
];

const Buscador = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");
  const [selectedStop, setSelectedStop] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [date, setDate] = useState("");
  const [filteredReports, setFilteredReports] = useState([]);

  const reports = [
    { area: 'Chancado', component: 'Faja', stop: '2024 - 1', date: '2024-10-01', name: 'Reporte 1', status: 'Bueno' },
    { area: 'Molienda', component: 'Polea', stop: '2024 - 2', date: '2024-10-02', name: 'Reporte 2', status: 'Advertencia' },
    { area: 'Filtro', component: 'MLB', stop: '2024 - 1', date: '2024-10-01', name: 'Reporte 3', status: 'Peligro' },
  ];

  const handleSearch = () => {
    const results = reports.filter(report => {
      return (
        (selectedArea ? report.area === selectedArea : false) &&
        (selectedComponent ? report.component === selectedComponent : false) &&
        (selectedStop ? report.stop === selectedStop : false) &&
        (selectedStatus ? report.status === selectedStatus : false) &&
        (date ? report.date === date : false)
      );
    });
    setFilteredReports(results);
  };

  const handleView = (index) => {
    // Implementar la lógica de ver el reporte aquí
    console.log(`Viendo el reporte: ${filteredReports[index].name}`);
  };

  const handleDelete = (index) => {
    const newFilteredReports = filteredReports.filter((_, i) => i !== index);
    setFilteredReports(newFilteredReports);
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Buscador de Reportes</strong>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <div className="d-flex justify-content-between mb-3">
              <div className="me-2" style={{ flex: '1' }}>
                <strong>Seleccionar Área</strong>
                <CFormSelect onChange={(e) => setSelectedArea(e.target.value)} value={selectedArea}>
                  <option value="">Seleccionar Área</option>
                  {areas.map(area => (
                    <option key={area.name} value={area.name}>{area.name}</option>
                  ))}
                </CFormSelect>
              </div>
              <div className="ms-2" style={{ flex: '1' }}>
                <strong>Seleccionar Componente</strong>
                <CFormSelect onChange={(e) => setSelectedComponent(e.target.value)} value={selectedComponent}>
                  <option value="">Seleccionar Componente</option>
                  {components.map(component => (
                    <option key={component.name} value={component.name}>{component.name}</option>
                  ))}
                </CFormSelect>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="me-2" style={{ flex: '1' }}>
                <strong>Seleccionar Parada</strong>
                <CFormSelect onChange={(e) => setSelectedStop(e.target.value)} value={selectedStop}>
                  <option value="">Seleccionar Parada</option>
                  {stops.map(stop => (
                    <option key={stop.name} value={stop.name}>{stop.name}</option>
                  ))}
                </CFormSelect>
              </div>
              <div className="ms-2" style={{ flex: '1' }}>
                <strong>Seleccionar Estado</strong>
                <CFormSelect onChange={(e) => setSelectedStatus(e.target.value)} value={selectedStatus}>
                  <option value="">Seleccionar Estado</option>
                  {statuses.map(status => (
                    <option key={status.name} value={status.name}>{status.name}</option>
                  ))}
                </CFormSelect>
              </div>
            </div>
            <div className="mb-3">
              <strong>Seleccionar Fecha</strong>
              <CFormInput
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <CButton color="primary" size="lg" onClick={handleSearch}>
              Buscar
            </CButton>
          </CForm>

          {filteredReports.length > 0 && (
            <CTable className="mt-4">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Área</CTableHeaderCell>
                  <CTableHeaderCell>Componente</CTableHeaderCell>
                  <CTableHeaderCell>Parada</CTableHeaderCell>
                  <CTableHeaderCell>Fecha</CTableHeaderCell>
                  <CTableHeaderCell>Nombre</CTableHeaderCell>
                  <CTableHeaderCell>Estado</CTableHeaderCell>
                  <CTableHeaderCell>Acciones</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredReports.map((report, index) => (
                  <CTableRow key={index} style={statusStyles[report.status]}>
                    <CTableDataCell>{report.area}</CTableDataCell>
                    <CTableDataCell>{report.component}</CTableDataCell>
                    <CTableDataCell>{report.stop}</CTableDataCell>
                    <CTableDataCell>{report.date}</CTableDataCell>
                    <CTableDataCell>{report.name}</CTableDataCell>
                    <CTableDataCell>{report.status}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="link" onClick={() => handleView(index)}>
                        <FaEye />
                      </CButton>
                      <CButton color="link" onClick={() => handleDelete(index)}>
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default Buscador;
