import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DayEntry } from './types';

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', flex: 1 },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => {
      const row = params.row as DayEntry;
      return new Date(row.date).toLocaleDateString();
    },
  },
];

export default columns;
