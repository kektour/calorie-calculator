import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { DayEntry } from './day-entry.schema';
import { Meal } from './meal.schema';

export type DayEntryMealDocument = HydratedDocument<DayEntryMeal>;

@Schema()
export class DayEntryMeal {
  @Prop({ type: Types.ObjectId, ref: 'DayEntry', required: true })
  dayEntry: DayEntry;

  @Prop({ type: Types.ObjectId, ref: 'Meal', required: true })
  meal: Meal;

  @Prop({ type: Number, required: true })
  weight: number;
}

export const DayEntryMealSchema = SchemaFactory.createForClass(DayEntryMeal);
