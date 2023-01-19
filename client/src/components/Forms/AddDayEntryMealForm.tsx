import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const AddDayEntryMealForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Add Day Entry Meal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddDayEntryMealForm;
