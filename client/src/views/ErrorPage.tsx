import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Box>
          <Typography variant="h1">Oops!</Typography>
          <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
        </Box>
      </Box>
    </Container>
  );
};
