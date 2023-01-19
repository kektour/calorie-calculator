import { Box, Button } from '@mui/material';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import React, { useCallback } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/shared/Header';
import ROUTE from '../../routes';
import cols from './cols';
import TotalPfc from './TotalPfc';
import { AllMealsByDayEntry, DayEntryMeal } from './types';

const DayEntryPage: React.FC = () => {
  const [allMealsByDayEntry, setAllMealsByDayEntry] =
    React.useState<AllMealsByDayEntry | null>(null);
  const { dayEntryId } = useParams();
  const navigate = useNavigate();

  const fetchAllMealsByDayEntry = React.useCallback(async () => {
    try {
      const res = await fetch(`/day-entry/${dayEntryId}`);
      const data = await res.json();

      if (data.statusCode) {
        throw new Error(data);
      }

      setAllMealsByDayEntry(data);
    } catch (err) {
      navigate(ROUTE.ROOT_PAGE);
    }
  }, [dayEntryId, navigate]);

  const handleDayEntryAddMeal = useCallback(() => {
    navigate(
      generatePath(ROUTE.DAY_ENTRY_ADD_MEAL_PAGE, { dayEntryId: dayEntryId }),
    );
  }, [dayEntryId, navigate]);

  React.useEffect(() => {
    fetchAllMealsByDayEntry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Header />

      <Box height={500}>
        <DataGrid
          rows={allMealsByDayEntry ? allMealsByDayEntry.meals : []}
          columns={cols}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row: DayEntryMeal) => `${row.title}:${row.weight}`}
          onRowClick={(a: GridRowParams<DayEntryMeal>) => {}}
        />
      </Box>
      <Button variant="contained" onClick={handleDayEntryAddMeal}>
        Add Day Entry Meal
      </Button>
      <TotalPfc
        proteins={allMealsByDayEntry?.total.proteins}
        fats={allMealsByDayEntry?.total.fats}
        carbohydrates={allMealsByDayEntry?.total.carbohydrates}
      />
    </Box>
  );
};

export default DayEntryPage;
