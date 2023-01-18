import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CalculatedDayEntryMeals,
  FoundAllMealsByDayEntry,
} from 'src/interfaces/day-entry.interface';

import { CreateDayEntryMealDto } from '../dto/create-day-entry-meal.dto';
import { CreateDayEntryDto } from '../dto/create-day-entry.dto';
import {
  DayEntryMeal,
  DayEntryMealDocument,
} from '../schemas/day-entry-meal.schema';
import { DayEntry, DayEntryDocument } from '../schemas/day-entry.schema';
import { PfcService } from './pfc.service';

@Injectable()
export class DayEntryService {
  constructor(
    @InjectModel(DayEntry.name)
    private readonly dayEntryModel: Model<DayEntryDocument>,
    @InjectModel(DayEntryMeal.name)
    private readonly dayEntryMealModel: Model<DayEntryMealDocument>,
    private readonly pfcService: PfcService,
  ) {}

  public create(createDayEntryDto: CreateDayEntryDto): Promise<DayEntry> {
    const createdDayEntry = new this.dayEntryModel(createDayEntryDto);
    return createdDayEntry.save();
  }

  public findAll(): Promise<DayEntry[]> {
    return this.dayEntryModel.find().exec();
  }

  public createMeal(
    dayEntryId: string,
    createDayEntryMealDto: CreateDayEntryMealDto,
  ) {
    const { mealId, weight } = createDayEntryMealDto;
    const createdDayEntryMeal = new this.dayEntryMealModel({
      weight,
      dayEntry: dayEntryId,
      meal: mealId,
    });
    return createdDayEntryMeal.save();
  }

  public async findAllMeals(
    dayEntryId: string,
  ): Promise<FoundAllMealsByDayEntry> {
    const [dayEntry, dayEntryMeals] = await Promise.all([
      this.dayEntryModel.findById(dayEntryId),
      this.dayEntryMealModel
        .find()
        .where({ dayEntry: dayEntryId })
        .populate('meal'),
    ]);

    const calculatedDayEntryMeals: CalculatedDayEntryMeals[] =
      dayEntryMeals.map((dayEntryMeal) => ({
        title: dayEntryMeal.meal.title,
        weight: dayEntryMeal.weight,
        proteins: this.pfcService.calcByWeight(
          dayEntryMeal.meal.proteins,
          dayEntryMeal.weight,
        ),
        fats: this.pfcService.calcByWeight(
          dayEntryMeal.meal.fats,
          dayEntryMeal.weight,
        ),
        carbohydrates: this.pfcService.calcByWeight(
          dayEntryMeal.meal.carbohydrates,
          dayEntryMeal.weight,
        ),
      }));

    return {
      date: dayEntry.date,
      meals: calculatedDayEntryMeals,
      total: this.pfcService.sum(calculatedDayEntryMeals),
    };
  }
}
