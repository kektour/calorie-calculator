import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMealDto {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  proteins: number;

  @IsNumber()
  fats: number;

  @IsNumber()
  carbohydrates: number;
}
