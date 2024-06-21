import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: '#1F3A93', // dark blue
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f2f2f2', // light gray for odd rows
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#ffffff', // white for even rows
    },
  },
  tableFooter: {
    backgroundColor: '#1F3A93', // dark blue
    color: '#ffffff',
    fontWeight: 'bold',
  },
  firstColumn: {
    backgroundColor: '#1F3A93', // dark blue
    color: '#ffffff',
    fontWeight: 'bold',
  },
  secondColumn: {
    backgroundColor: '#ECF0F1', // light blue
    color: '#333333',
  },
  thirdColumn: {
    backgroundColor: '#ECF0F1', // light blue
    color: '#333333',
  },
  fourthColumn: {
    backgroundColor: '#ECF0F1', // light blue
    color: '#333333',
  },
  lastColumn: {
    backgroundColor: '#1F3A93', // dark blue
    color: '#ffffff',
    fontWeight: 'bold',
  },
}));

const initialData = {
  P1: { total: '', measured: '' },
  P2: { total: '', measured: '' },
  P3: { total: '', measured: '' },
  image: null,
};

const Fajas = () => {
  const [data, setData] = useState(initialData);
  const theme = useTheme();
  const classes = useStyles();

  const handleInputChange = (project, field, value) => {
    setData((prevState) => ({
      ...prevState,
      [project]: {
        ...prevState[project],
        [field]: value,
      },
    }));
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setData((prevState) => ({
        ...prevState,
        image: URL.createObjectURL(event.target.files[0]),
      }));
    }
  };

  const calculateTotal = (field) => {
    return Object.keys(data)
      .filter((key) => key !== 'image')
      .reduce((acc, project) => acc + Number(data[project][field] || 0), 0);
  };

  const calculatePercentage = (total, measured) => {
    return (measured / total) * 100 || 0;
  };

  const totals = calculateTotal('total');
  const measuredTotals = calculateTotal('measured');
  const percentageTotal = calculatePercentage(totals, measuredTotals).toFixed(2);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        MOLINO DE BOLAS #2
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        SELECCIONE EL PROYECTO:
      </Typography>
      <Box sx={{ textAlign: 'center', marginY: 2 }}>
        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          {data.image ? (
            <img src={data.image} alt="uploaded" style={{ maxWidth: '100%' }} />
          ) : (
            <Button variant="contained" component="label">
              Cargar Imagen
              <input type="file" hidden onChange={handleImageChange} />
            </Button>
          )}
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ marginY: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.firstColumn}>PROYECTO</TableCell>
              <TableCell className={classes.secondColumn} align="right">TOTALES</TableCell>
              <TableCell className={classes.thirdColumn} align="right">MEDIDOS</TableCell>
              <TableCell className={classes.fourthColumn} align="right">PORCENTAJE</TableCell>
              <TableCell className={classes.lastColumn} align="right">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {['P1', 'P2', 'P3'].map((project) => {
              const total = Number(data[project].total || 0);
              const measured = Number(data[project].measured || 0);
              const percentage = calculatePercentage(total, measured).toFixed(2);

              return (
                <TableRow key={project} className={classes.tableRow}>
                  <TableCell className={classes.firstColumn}>{project}</TableCell>
                  <TableCell className={classes.secondColumn} align="right">
                    <TextField
                      type="number"
                      value={data[project].total}
                      onChange={(e) => handleInputChange(project, 'total', e.target.value)}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell className={classes.thirdColumn} align="right">
                    <TextField
                      type="number"
                      value={data[project].measured}
                      onChange={(e) => handleInputChange(project, 'measured', e.target.value)}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell className={classes.fourthColumn} align="right">{percentage} %</TableCell>
                  <TableCell className={classes.lastColumn} align="right">{totals}</TableCell>
                </TableRow>
              );
            })}
            <TableRow className={classes.tableFooter}>
              <TableCell className={classes.firstColumn}>Total</TableCell>
              <TableCell className={classes.secondColumn} align="right">{totals}</TableCell>
              <TableCell className={classes.thirdColumn} align="right">{measuredTotals}</TableCell>
              <TableCell className={classes.fourthColumn} align="right">{percentageTotal} %</TableCell>
              <TableCell className={classes.lastColumn} align="right">{percentageTotal} %</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary">
          Atrás
        </Button>
        <Button variant="contained" color="primary">
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default Fajas;
