import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDayEntryDto } from '../dto/create-day-entry.dto';
import { CreateDayEntryMealDto } from '../dto/create-day-entry-meal.dto';
import { DayEntry } from '../schemas/day-entry.schema';
import { DayEntryMeal } from '../schemas/day-entry-meal.schema';
import { DayEntryService } from '../services/day-entry.service';
import { CreateDayEntryMealParamsDto } from 'src/dto/create-day-entry-meal-params.dto';
import { FoundAllMealsByDayEntry } from 'src/interfaces/day-entry.interface';

@Controller('day-entry')
export class DayEntryController {
  constructor(private readonly dayEntryService: DayEntryService) {}

  @Post()
  public create(
    @Body() createDayEntryDto: CreateDayEntryDto,
  ): Promise<DayEntry> {
    return this.dayEntryService.create(createDayEntryDto);
  }

  @Get()
  public findAll(): Promise<DayEntry[]> {
    return this.dayEntryService.findAll();
  }

  @Post(':dayEntryId')
  public createMeal(
    @Param() { dayEntryId }: CreateDayEntryMealParamsDto,
    @Body() createDayEntryMealDto: CreateDayEntryMealDto,
  ): Promise<DayEntryMeal> {
    return this.dayEntryService.createMeal(dayEntryId, createDayEntryMealDto);
  }

  @Get(':dayEntryId')
  public findAllMeals(
    @Param('dayEntryId') dayEntryId: string,
  ): Promise<FoundAllMealsByDayEntry> {
    return this.dayEntryService.findAllMeals(dayEntryId);
  }
}
