import React from 'react';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import columns from './cols';
import { DayEntry } from './types';

const RootPage: React.FC = () => {
  const [dayEntries, setDayEntries] = React.useState<DayEntry[]>([]);

  const fetchDayEntries = React.useCallback(async () => {
    const res = await fetch('/day-entry');
    const data = await res.json();

    setDayEntries(data);
  }, []);

  React.useEffect(() => {
    fetchDayEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={dayEntries} columns={columns} pageSize={5} rowsPerPageOptions={[5]} getRowId={(row: DayEntry) => row._id} />
      </div>
    </Container>
  );
};

export default RootPage;
