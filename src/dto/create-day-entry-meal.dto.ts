import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class CreateDayEntryMealDto {
  @IsMongoId()
  @IsNotEmpty()
  mealId: Types.ObjectId;

  @IsNumber()
  @IsNotEmpty()
  weight: number;
}
