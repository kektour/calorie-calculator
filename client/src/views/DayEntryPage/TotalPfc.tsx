import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

type Props = {
  proteins?: number;
  fats?: number;
  carbohydrates?: number;
};

const TotalPfc: React.FC<Props> = ({
  proteins = 0,
  fats = 0,
  carbohydrates = 0,
}) => {
  return (
    <Paper>
      <Typography variant="body1">
        Total Proteins, Fats and Carbohydrates
      </Typography>
      <Typography variant="body2">Proteins: {proteins}</Typography>
      <Typography variant="body2">Fats: {fats}</Typography>
      <Typography variant="body2">Carbohydrates: {carbohydrates}</Typography>
    </Paper>
  );
};

export default TotalPfc;
