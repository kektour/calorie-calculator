import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DayEntryController } from './controllers/day-entry.controller';

import { MealController } from './controllers/meal.controller';
import {
  DayEntryMeal,
  DayEntryMealSchema,
} from './schemas/day-entry-meal.schema';
import { DayEntry, DayEntrySchema } from './schemas/day-entry.schema';
import { Meal, MealSchema } from './schemas/meal.schema';
import { DayEntryService } from './services/day-entry.service';
import { MealService } from './services/meal.service';
import { PfcService } from './services/pfc.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/calorie-calculator'),
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
    MongooseModule.forFeature([
      { name: DayEntry.name, schema: DayEntrySchema },
    ]),
    MongooseModule.forFeature([
      { name: DayEntryMeal.name, schema: DayEntryMealSchema },
    ]),
  ],
  controllers: [MealController, DayEntryController],
  providers: [MealService, DayEntryService, PfcService],
})
export class AppModule {}
