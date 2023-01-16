import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MealModule } from './meal/meal.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/calorie-calculator'),
    MealModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
