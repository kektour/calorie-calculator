import React from 'react';
import Header from './shared/Header';
import AddDayEntryMealForm from './Forms/AddDayEntryMealForm';

const AddDayEntryMealView: React.FC = () => {
  return (
    <div>
      <Header />
      <AddDayEntryMealForm />
    </div>
  );
};

export default AddDayEntryMealView;
