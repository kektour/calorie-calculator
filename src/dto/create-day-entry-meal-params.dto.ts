import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateDayEntryMealParamsDto {
  @IsMongoId()
  @IsNotEmpty()
  dayEntryId: string;
}
