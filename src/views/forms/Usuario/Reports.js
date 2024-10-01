import React, { useState } from 'react';
import { 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CTable, 
  CTableBody, 
  CTableDataCell, 
  CTableHead, 
  CTableHeaderCell, 
  CTableRow, 
  CButton, 
  CFormSelect 
} from '@coreui/react';

const statusStyles = {
  Advertencia: { borderLeft: '5px solid #ffc107', paddingLeft: '10px', color: '#ffc107' }, 
  Bueno: { borderLeft: '5px solid #28a745', paddingLeft: '10px', color: '#28a745' }, 
  Peligro: { borderLeft: '5px solid #dc3545', paddingLeft: '10px', color: '#dc3545' },
};

// Áreas disponibles
const areas = [
  { name: 'Chancado' },
  { name: 'Molienda' },
  { name: 'Filtro' },
  { name: 'Flotación' },
  { name: 'Moly' }
];

// Reportes iniciales por área
const allReports = {
  'Chancado': [
    { name: 'Faja F1101', status: 'Advertencia' },
    { name: 'Faja F1102', status: 'Peligro' }
  ],
  'Molienda': [
    { name: 'Faja F1501', status: 'Bueno' },
    { name: 'Faja F1601', status: 'Peligro' }
  ],
  'Filtro': [
    { name: 'Faja F1101', status: 'Advertencia' }
  ],
  'Flotación': [
    { name: 'Faja F1701', status: 'Peligro' }
  ],
  'Moly': [
    { name: 'Faja F1701', status: 'Bueno' }
  ],
};

const ReportTable = () => {
  const [selectedArea, setSelectedArea] = useState(null); // Cambiado a null
  const [reports, setReports] = useState([]);

  const handleAreaChange = (e) => {
    const area = e.target.value;
    setSelectedArea(area);
    setReports(allReports[area] || []);
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Seleccione un Área</strong>
        </CCardHeader>
        <CCardBody>
          <CFormSelect onChange={handleAreaChange} value={selectedArea || ''}>
            <option value="" disabled>Seleccionar área</option> {/* Opción para que no esté vacío */}
            {areas.map((area, index) => (
              <option key={index} value={area.name}>{area.name}</option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>

      {selectedArea && ( // Mostrar tabla solo si se seleccionó un área
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lista de Reportes - {selectedArea}</strong>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead className="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell>Nombre del Reporte</CTableHeaderCell>
                  <CTableHeaderCell>Estado</CTableHeaderCell>
                  <CTableHeaderCell>Acción</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {reports.length > 0 ? (
                  reports.map((report, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{report.name}</CTableDataCell>
                      <CTableDataCell style={statusStyles[report.status]}>
                        {report.status}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <CButton
                            color="primary"
                            style={{ marginRight: '5px' }}
                          >
                            Ver
                          </CButton>
                          <CButton color="success">
                            Descargar
                          </CButton>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                ) : (
                  <CTableRow>
                    <CTableDataCell colSpan={3} className="text-center">
                      No hay reportes disponibles para esta área.
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      )}
    </>
  );
};

export default ReportTable;
