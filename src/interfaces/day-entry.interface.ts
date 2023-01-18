export interface CalculatedDayEntryMeals {
  title: string;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
}

export interface FoundAllMealsByDayEntry {
  date: Date;
  meals: CalculatedDayEntryMeals[];
  total: {
    proteins: number;
    fats: number;
    carbohydrates: number;
  };
}
