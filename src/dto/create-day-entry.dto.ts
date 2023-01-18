import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateDayEntryDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;
}
