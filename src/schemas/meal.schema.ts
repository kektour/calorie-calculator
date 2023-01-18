import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MealDocument = HydratedDocument<Meal>;

@Schema()
export class Meal {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  proteins: number;

  @Prop({ required: true })
  fats: number;

  @Prop({ required: true })
  carbohydrates: number;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
