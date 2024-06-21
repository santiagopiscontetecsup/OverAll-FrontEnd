import React from 'react';
import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../componentes/Header";
import { useNavigate } from "react-router-dom";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Hook de navegación

  const renderEstado = (params) => {
    let color;
    switch (params.value) {
      case 'pendiente':
        color = 'yellow';
        break;
      case 'borrador':
        color = 'grey';
        break;
      case 'enviado':
        color = 'lightgreen'; // Verde claro
        break;
      default:
        color = 'transparent';
    }

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      </Box>
    );
  };

  const handleEdit = (id) => {
    // Aquí puedes agregar la lógica de edición que necesites
    console.log(`Editando reporte con ID: ${id}`);
  };

  const renderEditButton = (params) => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleEdit(params.id)}
      >
        Editar
      </Button>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, headerAlign: 'center', align: 'center' },
    {
      field: "estado",
      headerName: "Estado",
      flex: 1,
      renderCell: renderEstado,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "componente",
      headerName: "Componente",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "tag",
      headerName: "Tag",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "area",
      headerName: "Area",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "editar",
      headerName: "Editar",
      flex: 1,
      renderCell: renderEditButton,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const handleCreateReport = () => {
    navigate("/fajas");
  };

  return (
    <Box m="20px">
      <Header title="Reportes" subtitle="Lista de reportes" />
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" color="primary" onClick={handleCreateReport}>
          CREAR REPORTE
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
