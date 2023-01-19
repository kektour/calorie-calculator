import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTE from './routes';
import DayEntryPage from './views/DayEntryPage';
import ErrorPage from './views/ErrorPage';
import RootPage from './views/RootPage';
import AddDayEntryMealView from './components/AddDayEntryMealView';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.ROOT_PAGE} element={<RootPage />} />
          <Route path={ROUTE.DAY_ENTRY_PAGE} element={<DayEntryPage />} />
          <Route path={ROUTE.DAY_ENTRY_ADD_MEAL_PAGE} element={<AddDayEntryMealView />} />
          <Route path={ROUTE.NOT_DEFINED_PAGE}  element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
