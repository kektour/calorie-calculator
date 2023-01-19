import { GridColDef } from '@mui/x-data-grid';

const cols: GridColDef[] = [
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'weight', headerName: 'Weight', flex: 1 },
  { field: 'proteins', headerName: 'Proteins', flex: 1 },
  { field: 'fats', headerName: 'Fats', flex: 1 },
  { field: 'carbohydrates', headerName: 'Carbohydrates', flex: 1 },
];

export default cols;
