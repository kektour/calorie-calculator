import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MealController } from './meal.controller';
import { Meal, MealSchema } from './meal.schema';
import { MealService } from './meal.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
  ],
  providers: [MealService],
  controllers: [MealController],
})
export class MealModule {}
