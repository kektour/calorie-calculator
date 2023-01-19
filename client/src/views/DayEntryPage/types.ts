export interface DayEntryMeal {
  title: string;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
}

export interface AllMealsByDayEntry {
  date: Date;
  meals: DayEntryMeal[];
  total: {
    proteins: number;
    fats: number;
    carbohydrates: number;
  };
}
