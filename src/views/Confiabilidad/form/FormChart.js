import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCol,
  CForm,
  CFormLabel,
  CFormSelect,
  CAlert,
} from '@coreui/react';
import Select from 'react-select';

const FormChart = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedDataY, setSelectedDataY] = useState('');
  const [selectedPara, setSelectedPara] = useState('');
  const [selectedChartType, setSelectedChartType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [areaError, setAreaError] = useState(false);

  const areas = [
    { value: 'Chancado', label: 'Chancado' },
    { value: 'Molienda', label: 'Molienda' },
    { value: 'Filtro', label: 'Filtro' },
    { value: 'Flotación', label: 'Flotación' },
    { value: 'Moly', label: 'Moly' }
  ];

  const dataOptions = [
    { value: 'Reportes', label: 'Reportes' },
    { value: 'Estado', label: 'Estado' },
  ];

  const chartTypes = [
    { value: 'line', label: 'Gráfico de Línea' },
    { value: 'bar', label: 'Gráfico de Barras' },
  ];

  const paraOptions = [
    { value: '2024-1', label: '2024-1' },
    { value: '2024-2', label: '2024-2' },
  ];

  const handleAreaChange = (selectedOptions) => {
    setSelectedAreas(selectedOptions);
    setAreaError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAreas.length === 0 || !selectedDataY || !selectedPara || !selectedChartType) {
      setErrorMessage('Por favor, completa todos los campos.');
      setSuccessMessage('');
      if (selectedAreas.length === 0) {
        setAreaError(true);
      } else {
        setAreaError(false);
      }
    } else {
      setSuccessMessage('Gráfico generado exitosamente.');
      setErrorMessage('');
      console.log(`Áreas seleccionadas: ${selectedAreas.map(area => area.value).join(', ')}, Eje Y: ${selectedDataY}, Para: ${selectedPara}, Tipo de Gráfico: ${selectedChartType}`);
      // Aquí puedes llamar a tu lógica de generación de gráficos
    }
  };

  return (
    <>
      {successMessage && <CAlert color="success">{successMessage}</CAlert>}
      {errorMessage && <CAlert color="danger">{errorMessage}</CAlert>}
      <CForm className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
        <CCol md={6}>
          <CFormLabel htmlFor="area">Seleccionar Áreas (Eje X)</CFormLabel>
          <Select
            id="area"
            options={areas}
            isMulti
            onChange={handleAreaChange}
            className={`basic-multi-select ${areaError ? 'is-invalid' : ''}`}
            classNamePrefix="select"
            placeholder="Selecciona las áreas..."
            required
          />
          {areaError && <div className="invalid-feedback">Por favor, selecciona al menos un área.</div>}
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="dataY">Seleccionar Datos (Eje Y)</CFormLabel>
          <CFormSelect
            id="dataY"
            value={selectedDataY}
            onChange={(e) => setSelectedDataY(e.target.value)}
            required
          >
            <option value="">Selecciona los datos...</option>
            {dataOptions.map(data => (
              <option key={data.value} value={data.value}>{data.label}</option>
            ))}
          </CFormSelect>
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="para">Seleccionar Para</CFormLabel>
          <CFormSelect
            id="para"
            value={selectedPara}
            onChange={(e) => setSelectedPara(e.target.value)}
            required
          >
            <option value="">Selecciona un período...</option>
            {paraOptions.map(para => (
              <option key={para.value} value={para.value}>{para.label}</option>
            ))}
          </CFormSelect>
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="chartType">Seleccionar Tipo de Gráfico</CFormLabel>
          <CFormSelect
            id="chartType"
            value={selectedChartType}
            onChange={(e) => setSelectedChartType(e.target.value)}
            required
          >
            <option value="">Selecciona un tipo de gráfico...</option>
            {chartTypes.map(chart => (
              <option key={chart.value} value={chart.value}>{chart.label}</option>
            ))}
          </CFormSelect>
        </CCol>

        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Generar Gráfico
          </CButton>
        </CCol>
      </CForm>
    </>
  );
};

export default FormChart;
