import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  proteins: number;

  @IsNumber()
  @IsNotEmpty()
  fats: number;

  @IsNumber()
  @IsNotEmpty()
  carbohydrates: number;
}
