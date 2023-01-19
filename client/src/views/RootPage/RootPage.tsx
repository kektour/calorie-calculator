import React from 'react';
import { Box, Container } from '@mui/material';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { useNavigate, generatePath } from 'react-router-dom';

import Header from '../../components/shared/Header';
import columns from './cols';
import { DayEntry } from './types';
import ROUTE from '../../routes';

const RootPage: React.FC = () => {
  const [dayEntries, setDayEntries] = React.useState<DayEntry[]>([]);
  const navigate = useNavigate();

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
    <Box>
      <Header />
      <Container>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={dayEntries}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row: DayEntry) => row._id}
            onRowClick={(a: GridRowParams<DayEntry>) => {
              navigate(
                generatePath(ROUTE.DAY_ENTRY_PAGE, { dayEntryId: a.row._id }),
              );
            }}
          />
        </div>
      </Container>
    </Box>
  );
};

export default RootPage;
