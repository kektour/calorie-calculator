import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateMealDto } from './meal.dto';
import { Meal, MealDocument } from './meal.schema';

@Injectable()
export class MealService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<MealDocument>) {}

  public create(createMealDto: CreateMealDto): Promise<Meal> {
    const createdMeal = new this.mealModel(createMealDto);
    return createdMeal.save();
  }

  public async findAll(): Promise<Meal[]> {
    return this.mealModel.find().exec();
  }
}
