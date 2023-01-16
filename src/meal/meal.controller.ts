import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMealDto } from './meal.dto';
import { Meal } from './meal.schema';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  public create(@Body() createMealDto: CreateMealDto): Promise<Meal> {
    return this.mealService.create(createMealDto);
  }

  @Get()
  public findAll(): Promise<Meal[]> {
    return this.mealService.findAll();
  }
}
