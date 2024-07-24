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
  CRow,
} from '@coreui/react';

const FormControl = () => {
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
    puntosEspesores: Array(12).fill(Array(7).fill('')),
    puntosDureza: Array(3).fill(Array(7).fill('')),
    puntosEmpalme1: Array(2).fill(Array(7).fill('')),
    puntosEmpalme2: Array(2).fill(Array(7).fill('')),
    comentarios: '',
    registroFotografico: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
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

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reporte de Inspección</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
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
              </CRow>
              <h5>Circunstancias de la Inspección</h5>
              <CFormTextarea id="circunstancias" rows={3} value={formData.circunstancias} onChange={handleChange} placeholder="Circunstancias de la Inspección"></CFormTextarea>
              <h5>Antecedentes</h5>
              <CFormTextarea id="antecedentes" rows={3} value={formData.antecedentes} onChange={handleChange} placeholder="Antecedentes"></CFormTextarea>
              <h5>Observaciones</h5>
              <CFormTextarea id="observaciones" rows={3} value={formData.observaciones} onChange={handleChange} placeholder='OBSERVACIONES: "TOP COVER: *Espesor mínimo en top cover: XX.XX mm."'></CFormTextarea>
              <h5>Conclusiones y Recomendaciones</h5>
              <CFormTextarea id="conclusiones" rows={3} value={formData.conclusiones} onChange={handleChange} placeholder="Conclusiones y Recomendaciones"></CFormTextarea>
              <h5>Mediciones de Espesores y Durezas</h5>
              <CRow className="mb-3">
                <CCol md={12}>
                  <CFormLabel htmlFor="medicionesEspesores">Mediciones de Espesores por Ultrasonico (UT)</CFormLabel>
                  <CFormInput type="file" id="medicionesEspesores" onChange={handleChange} />
                </CCol>
              </CRow>
              <h5>Descripción del Proceso de Inspección</h5>
              <CRow className="mb-3">
                <CCol md={12}>
                  <CFormLabel htmlFor="descripcionProceso">Descripción del Proceso de Inspección</CFormLabel>
                  <CFormTextarea id="descripcionProceso" rows={3} value={formData.descripcionProceso} onChange={handleChange} placeholder="Descripción del Proceso de Inspección"></CFormTextarea>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="marcaEquipo">Marca del Equipo</CFormLabel>
                  <CFormInput type="text" id="marcaEquipo" value={formData.marcaEquipo} onChange={handleChange} placeholder="Marca del Equipo" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="modeloEquipo">Modelo del Equipo</CFormLabel>
                  <CFormInput type="text" id="modeloEquipo" value={formData.modeloEquipo} onChange={handleChange} placeholder="Modelo del Equipo" />
                </CCol>
              </CRow>
              <h5>Medición de Espesores del Top Cover de la Faja 0310-CVB-0015</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Puntos</th>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                      <th key={letter}>{letter}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {formData.puntosEspesores.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowIndex + 1}</td>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) => handleTableChange(e, 'puntosEspesores', rowIndex, colIndex)}
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td>Promedio</td>
                    {promedioEspesores.map((prom, index) => (
                      <td key={index}>{prom}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Mínimo</td>
                    {minimoEspesores.map((min, index) => (
                      <td key={index}>{min}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <h5>Medición de Dureza en °SHOR A del Top Cover de la Faja 0310-CVB-0015</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Puntos</th>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                      <th key={letter}>{letter}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {formData.puntosDureza.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowIndex + 1}</td>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) => handleTableChange(e, 'puntosDureza', rowIndex, colIndex)}
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td>Promedio</td>
                    {promedioDureza.map((prom, index) => (
                      <td key={index}>{prom}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Mínimo</td>
                    {minimoDureza.map((min, index) => (
                      <td key={index}>{min}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <h5>Medición de Espesores en los Empalmes</h5>
              <h6>Empalme 1</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Puntos</th>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                      <th key={letter}>{letter}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {formData.puntosEmpalme1.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowIndex + 1}</td>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) => handleTableChange(e, 'puntosEmpalme1', rowIndex, colIndex)}
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td>Promedio</td>
                    {promedioEmpalme1.map((prom, index) => (
                      <td key={index}>{prom}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Mínimo</td>
                    {minimoEmpalme1.map((min, index) => (
                      <td key={index}>{min}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <h6>Empalme 2</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Puntos</th>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                      <th key={letter}>{letter}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {formData.puntosEmpalme2.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowIndex + 1}</td>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) => handleTableChange(e, 'puntosEmpalme2', rowIndex, colIndex)}
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td>Promedio</td>
                    {promedioEmpalme2.map((prom, index) => (
                      <td key={index}>{prom}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Mínimo</td>
                    {minimoEmpalme2.map((min, index) => (
                      <td key={index}>{min}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <h5>Comentarios</h5>
              <CFormTextarea id="comentarios" rows={3} value={formData.comentarios} onChange={handleChange} placeholder="Comentarios"></CFormTextarea>
              <h5>Registro Fotográfico</h5>
              <CFormInput type="file" id="registroFotografico" onChange={handleChange} />
              <CButton type="submit">Enviar</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default FormControl;
