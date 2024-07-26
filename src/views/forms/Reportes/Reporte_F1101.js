import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CRow,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';

const FormControl = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [currentTable, setCurrentTable] = useState(0);
  const [formData, setFormData] = useState({
    planta: '',
    proceso: '',
    equipo: '',
    tag: '',
    etapa: '',
    condicionEquipo: '',
    fechaInspeccion: '',
    fechaReporte: '',
    inspectoresCampo: '',
    supervisorCampo: '',
    analistaReporte: '',
    analistaValida: '',
    circunstancias: '',
    antecedentes: '',
    observaciones: '',
    conclusiones: '',
    medicionesEspesores: '',
    descripcionProceso: '',
    marcaEquipo: '',
    modeloEquipo: '',
    tipoHaz: '',
    ganancia: '',
    frecuencia: '',
    velocidad: '',
    anchoBanda: '',
    retardo: '',
    amortiguamiento: '',
    diametro: '',
    puntosEspesores: Array(9).fill(Array(7).fill('')),
    puntosDureza: Array(3).fill(Array(7).fill('')),
    puntosEmpalme1: Array(3).fill(Array(7).fill('')),
    puntosEmpalme2: Array(3).fill(Array(7).fill('')),
    comentarios: '',
    registroFotografico: [],
    espesorImagen: null,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalErrorVisible, setModalErrorVisible] = useState(false); 
  const nombresPuntos = ['DESPUES', 'EMPALME', 'ANTES'];

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'registroFotografico') {
      if (formData.registroFotografico.length < 5) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          registroFotografico: [...prevFormData.registroFotografico, ...Array.from(files)],
        }));
      } else {
        setModalErrorVisible(true); 
      }
    } else if (id === 'medicionesEspesores') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        espesorImagen: files[0],
      }));
    } else {
      setFormData({
        ...formData,
        [id]: files ? files[0] : value,
      });
    }
  };

  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      registroFotografico: prevFormData.registroFotografico.filter((_, i) => i !== index),
    }));
  };

  const handleTableChange = (e, table, rowIndex, colIndex) => {
    const { value } = e.target;
    const updatedTable = formData[table].map((row, rIndex) =>
      row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? value : cell))
    );
    setFormData({
      ...formData,
      [table]: updatedTable,
    });
  };

  const calculatePromedio = (data) => {
    return data
      .map((row) =>
        row.reduce((acc, cell) => acc + parseFloat(cell || 0), 0) / row.filter((cell) => cell).length
      )
      .map((prom) => (isNaN(prom) ? '#¡DIV/0!' : prom.toFixed(2)));
  };

  const calculateMinimo = (data) => {
    return data
      .map((row) => Math.min(...row.map((cell) => parseFloat(cell || Infinity))))
      .map((min) => (min === Infinity ? '0.00' : min.toFixed(2)));
  };

  const promedioEspesores = calculatePromedio(formData.puntosEspesores);
  const minimoEspesores = calculateMinimo(formData.puntosEspesores);
  const promedioDureza = calculatePromedio(formData.puntosDureza);
  const minimoDureza = calculateMinimo(formData.puntosDureza);
  const promedioEmpalme1 = calculatePromedio(formData.puntosEmpalme1);
  const minimoEmpalme1 = calculateMinimo(formData.puntosEmpalme1);
  const promedioEmpalme2 = calculatePromedio(formData.puntosEmpalme2);
  const minimoEmpalme2 = calculateMinimo(formData.puntosEmpalme2);

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
    setCurrentTable(0); 
  };

  const handleNextTable = () => {
    setCurrentTable((prev) => prev + 1);
  };

  const handlePreviousTable = () => {
    setCurrentTable((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleSave = () => {
    console.log('Form data saved:', formData);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
    setModalVisible(true);
  };

  const renderTable = () => {
    switch (selectedReport) {
      case 'F1101':
        return (
          <>
            {currentTable === 0 && (
              <>
                <h5>Datos del Equipo o Componente</h5>
                <CRow className="mb-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="planta">Planta</CFormLabel>
                    <CFormInput type="text" id="planta" value={formData.planta} onChange={handleChange} placeholder="Planta" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="proceso">Proceso</CFormLabel>
                    <CFormInput type="text" id="proceso" value={formData.proceso} onChange={handleChange} placeholder="Proceso" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="equipo">Equipo</CFormLabel>
                    <CFormInput type="text" id="equipo" value={formData.equipo} onChange={handleChange} placeholder="Equipo" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="tag">Tag</CFormLabel>
                    <CFormInput type="text" id="tag" value={formData.tag} onChange={handleChange} placeholder="Tag" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="etapa">Etapa</CFormLabel>
                    <CFormInput type="text" id="etapa" value={formData.etapa} onChange={handleChange} placeholder="Etapa" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="condicionEquipo">Condición del equipo</CFormLabel>
                    <CFormInput type="text" id="condicionEquipo" value={formData.condicionEquipo} onChange={handleChange} placeholder="Condición del equipo" />
                  </CCol>
                </CRow>
                <h5>Información de Inspección</h5>
                <CRow className="mb-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="fechaInspeccion">Fecha de Inspección</CFormLabel>
                    <CFormInput type="date" id="fechaInspeccion" value={formData.fechaInspeccion} onChange={handleChange} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="fechaReporte">Fecha de Reporte</CFormLabel>
                    <CFormInput type="date" id="fechaReporte" value={formData.fechaReporte} onChange={handleChange} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inspectoresCampo">Inspector de Campo</CFormLabel>
                    <CFormInput type="text" id="inspectoresCampo" value={formData.inspectoresCampo} onChange={handleChange} placeholder="Inspector de Campo" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="supervisorCampo">Supervisor de Campo</CFormLabel>
                    <CFormInput type="text" id="supervisorCampo" value={formData.supervisorCampo} onChange={handleChange} placeholder="Supervisor de Campo" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="analistaReporte">Analista que Elabora</CFormLabel>
                    <CFormInput type="text" id="analistaReporte" value={formData.analistaReporte} onChange={handleChange} placeholder="Analista que Elabora" />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="analistaValida">Analista que Valida</CFormLabel>
                    <CFormInput type="text" id="analistaValida" value={formData.analistaValida} onChange={handleChange} placeholder="Analista que Valida" />
                  </CCol>
                </CRow>
              </>
            )}
            {currentTable === 1 && (
              <>
                <h5>Circunstancias de la Inspección</h5>
                <CFormTextarea id="circunstancias" rows={3} value={formData.circunstancias} onChange={handleChange} placeholder="Circunstancias de la Inspección"></CFormTextarea>
                <h5>Antecedentes</h5>
                <CFormTextarea id="antecedentes" rows={3} value={formData.antecedentes} onChange={handleChange} placeholder="Antecedentes"></CFormTextarea>
                <h5>Observaciones</h5>
                <CFormTextarea id="observaciones" rows={3} value={formData.observaciones} onChange={handleChange} placeholder='OBSERVACIONES: "TOP COVER: *Espesor mínimo en top cover: XX.XX mm."'></CFormTextarea>
                <h5>Conclusiones y Recomendaciones</h5>
                <CFormTextarea id="conclusiones" rows={3} value={formData.conclusiones} onChange={handleChange} placeholder="Conclusiones y Recomendaciones"></CFormTextarea>
              </>
            )}
            {currentTable === 2 && (
              <>
                <h5>Mediciones de Espesores y Durezas</h5>
                <CRow className="mb-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="medicionesEspesores">Mediciones de Espesores por Ultrasonico (UT)</CFormLabel>
                    <CFormInput type="file" id="medicionesEspesores" onChange={handleChange} />
                  </CCol>
                </CRow>
                {formData.espesorImagen && (
                  <div className="mt-3">
                    <img
                      src={URL.createObjectURL(formData.espesorImagen)}
                      alt="preview-espesor"
                      style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => handleImageClick(URL.createObjectURL(formData.espesorImagen))}
                    />
                  </div>
                )}
              </>
            )}
            {currentTable === 3 && (
              <>
                <h5>Descripción del Proceso de Inspección</h5>
                <CRow className="mb-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="procedimiento">Procedimiento</CFormLabel>
                    <CFormInput
                      type="text"
                      id="procedimiento"
                      value={formData.procedimiento || 'OS - UT - 0014'}
                      onChange={handleChange}
                      placeholder="Procedimiento"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="materialInspeccionado">Material Inspeccionado</CFormLabel>
                    <CFormInput
                      type="text"
                      id="materialInspeccionado"
                      value={formData.materialInspeccionado || 'CAUCHO'}
                      onChange={handleChange}
                      placeholder="Material Inspeccionado"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="componenteInspeccionado">Componente Inspeccionado</CFormLabel>
                    <CFormInput
                      type="text"
                      id="componenteInspeccionado"
                      value={formData.componenteInspeccionado || 'TOP COVER DE LA FAJA 11'}
                      onChange={handleChange}
                      placeholder="Componente Inspeccionado"
                    />
                  </CCol>
                </CRow>

                <h5>Parametros de Calibración del Equipo UT</h5>
                <CRow className="mb-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="marcaEquipo">Marca del Equipo</CFormLabel>
                    <CFormInput
                      type="text"
                      id="marcaEquipo"
                      value={formData.marcaEquipo || 'SIUI'}
                      onChange={handleChange}
                      placeholder="Marca del Equipo"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="modeloEquipo">Modelo</CFormLabel>
                    <CFormInput
                      type="text"
                      id="modeloEquipo"
                      value={formData.modeloEquipo || 'SMARTOR'}
                      onChange={handleChange}
                      placeholder="Modelo"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="tipoHaz">Tipo de Haz</CFormLabel>
                    <CFormInput
                      type="text"
                      id="tipoHaz"
                      value={formData.tipoHaz || 'HAZ RECTO'}
                      onChange={handleChange}
                      placeholder="Tipo de Haz"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="gananciaDb">Ganancia (dB)</CFormLabel>
                    <CFormInput
                      type="text"
                      id="gananciaDb"
                      value={formData.gananciaDb || '60'}
                      onChange={handleChange}
                      placeholder="Ganancia (dB)"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="frecuencia">Frecuencia (MHz)</CFormLabel>
                    <CFormInput
                      type="text"
                      id="frecuencia"
                      value={formData.frecuencia || '1'}
                      onChange={handleChange}
                      placeholder="Frecuencia (MHz)"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="velocidad">Velocidad (m/s)</CFormLabel>
                    <CFormInput
                      type="text"
                      id="velocidad"
                      value={formData.velocidad || ''} // Campo vacío para ingreso del usuario
                      onChange={handleChange}
                      placeholder="Velocidad (m/s)"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="anchoBanda">Ancho de Banda</CFormLabel>
                    <CFormInput
                      type="text"
                      id="anchoBanda"
                      value={formData.anchoBanda || '0.5 MHZ - 10 MHZ'}
                      onChange={handleChange}
                      placeholder="Ancho de Banda"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="retardo">Retardo (µs)</CFormLabel>
                    <CFormInput
                      type="text"
                      id="retardo"
                      value={formData.retardo || ''} // Campo vacío para ingreso del usuario
                      onChange={handleChange}
                      placeholder="Retardo (µs)"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="amortiguamiento">Amortiguamiento</CFormLabel>
                    <CFormInput
                      type="text"
                      id="amortiguamiento"
                      value={formData.amortiguamiento || '1000'}
                      onChange={handleChange}
                      placeholder="Amortiguamiento"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="diametro">Diametro (mm)</CFormLabel>
                    <CFormInput
                      type="text"
                      id="diametro"
                      value={formData.diametro || '20'}
                      onChange={handleChange}
                      placeholder="Diametro (mm)"
                    />
                  </CCol>
                </CRow>
              </>
            )}
            {currentTable === 4 && (
              <>
              <h5 style={{ textAlign: 'center' }}>MEDICION DE ESPESORES DEL TOP COVER DE LA FAJA 0320-CVB-0011</h5>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Puntos</th>
                      <th colSpan="7" style={{ verticalAlign: 'middle' }}>ESPESORES (mm)</th>
                      <th colSpan="2" style={{ verticalAlign: 'middle' }}>ESPESOR RESIDUAL</th>
                    </tr>
                    <tr>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter)=>(
                        <th key={letter}>{letter}</th>
                      ))}
                      <th>PROMEDIO</th>
                      <th>MINIMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.puntosEspesores.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td style={{ verticalAlign: 'middle' }}>{rowIndex + 1}</td>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} style={{ verticalAlign: 'middle' }}>
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) => handleTableChange(e, 'puntosEspesores', rowIndex, colIndex)}
                              className="form-control text-center"
                            />
                          </td>
                        ))}
                        <td style={{ verticalAlign: 'middle' }}>{promedioEspesores[rowIndex]}</td>
                        <td style={{ verticalAlign: 'middle' }}>{minimoEspesores[rowIndex]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {currentTable === 5 && (
              <>
                <h5 style={{ textAlign: 'center' }}>MEDICION DE DUREZA DEL TOP COVER DE LA FAJA 0320-CVB-0011</h5>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Puntos</th>
                      <th colSpan="9" style={{ verticalAlign: 'middle' }}>DUREZA (shore A)</th>
                    </tr>
                    <tr>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter)=>(
                        <th key={letter}>{letter}</th>
                      ))}
                      <th>PROMEDIO</th>
                      <th>MINIMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.puntosDureza.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td style={{ verticalAlign: 'middle' }}>{rowIndex + 1}</td>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} style={{ verticalAlign: 'middle' }}>
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) => handleTableChange(e, 'puntosDureza', rowIndex, colIndex)}
                              className="form-control text-center"
                            />
                          </td>
                        ))}
                        <td style={{ verticalAlign: 'middle' }}>{promedioDureza[rowIndex]}</td>
                        <td style={{ verticalAlign: 'middle' }}>{minimoDureza[rowIndex]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {currentTable === 6 && (
              <>
                <h5 style={{ textAlign: 'center' }}>MEDICION DE ESPESORES DEL TOP COVER DEL EMPALME E-01 DE LA FAJA 0320-CVB-0011</h5>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Puntos</th>
                      <th colSpan="7" style={{ verticalAlign: 'middle' }}>ESPESORES (mm)</th>
                      <th colSpan="2" style={{ verticalAlign: 'middle' }}>ESPESOR RESIDUAL</th>
                    </tr>
                    <tr>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                        <th key={letter}>{letter}</th>
                      ))}
                      <th>PROMEDIO</th>
                      <th>MINIMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.puntosEmpalme1.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td style={{ verticalAlign: 'middle' }}>{nombresPuntos[rowIndex]}</td> 
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} style={{ verticalAlign: 'middle' }}>
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) => handleTableChange(e, 'puntosEmpalme1', rowIndex, colIndex)}
                              className="form-control text-center"
                            />
                          </td>
                        ))}
                        <td style={{ verticalAlign: 'middle' }}>{promedioEmpalme1[rowIndex]}</td>
                        <td style={{ verticalAlign: 'middle' }}>{minimoEmpalme1[rowIndex]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {currentTable === 7 && (
              <>
                <h5 style={{ textAlign: 'center' }}>MEDICION DE ESPESORES DEL TOP COVER DEL EMPALME E-02 DE LA FAJA 0320-CVB-0011</h5>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Puntos</th>
                      <th colSpan="7" style={{ verticalAlign: 'middle' }}>ESPESORES (mm)</th>
                      <th colSpan="2" style={{ verticalAlign: 'middle' }}>ESPESOR RESIDUAL</th>
                    </tr>
                    <tr>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                        <th key={letter}>{letter}</th>
                      ))}
                      <th>PROMEDIO</th>
                      <th>MINIMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.puntosEmpalme2.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td style={{ verticalAlign: 'middle' }}>{nombresPuntos[rowIndex]}</td> 
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} style={{ verticalAlign: 'middle' }}>
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) => handleTableChange(e, 'puntosEmpalme2', rowIndex, colIndex)}
                              className="form-control text-center"
                            />
                          </td>
                        ))}
                        <td style={{ verticalAlign: 'middle' }}>{promedioEmpalme2[rowIndex]}</td>
                        <td style={{ verticalAlign: 'middle' }}>{minimoEmpalme2[rowIndex]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {currentTable === 8 && (
              <>
                <h5>Registro Fotográfico</h5>
                <CFormInput type="file" id="registroFotografico" multiple onChange={handleChange} />
                {formData.registroFotografico.length < 5 && (
                  <CButton color="primary" className="mt-2" onClick={() => document.getElementById('registroFotografico').click()}>
                    Agregar Más Imágenes
                  </CButton>
                )}
                <div className="mt-3">
                  {formData.registroFotografico.map((file, index) => (
                    <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '10px' }}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`preview-${index}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => handleImageClick(URL.createObjectURL(file))}
                      />
                      <CButton
                        color="danger"
                        style={{ position: 'absolute', top: '0', right: '0', color:"black"}}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        );
      case 'F1201':
        return (
          <>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <CCard>
      <CCardHeader>
        <CFormSelect aria-label="Seleccionar Reporte" onChange={handleReportChange}>
          <option value="">Seleccionar Reporte</option>
          <option value="F1101">Reporte F1101</option>
          <option value="F1201">Reporte F1201</option>
        </CFormSelect>
      </CCardHeader>
      <CCardBody>
        <CForm>
          {renderTable()}
          <CRow className="mt-3">
            <CCol>
              <CButton
                color="secondary"
                disabled={currentTable === 0}
                onClick={handlePreviousTable}
              >
                Anterior
              </CButton>
              {currentTable < 8 && (
                <CButton
                  color="primary"
                  className="ms-2"
                  onClick={handleNextTable}
                >
                  Siguiente
                </CButton>
              )}
              {currentTable === 8 && (
                <CButton
                  color="success"
                  className="ms-2"
                  onClick={handleSubmit}
                >
                  Enviar
                </CButton>
              )}
              {currentTable < 8 && (
                <CButton
                  color="warning"
                  className="ms-2"
                  onClick={handleSave}
                >
                  Guardar
                </CButton>
              )}
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Vista Previa de Imagen</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modalImage && <img src={modalImage} alt="Modal Preview" style={{ width: '100%', height: 'auto' }} />}
        </CModalBody>
      </CModal>
      <CModal visible={modalErrorVisible} onClose={() => setModalErrorVisible(false)}>
        <CModalHeader>
          <CModalTitle>Error</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Has alcanzado el límite de 5 imágenes.</p>
        </CModalBody>
      </CModal>
    </CCard>
  );
};

export default FormControl;
