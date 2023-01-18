import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DayEntryDocument = HydratedDocument<DayEntry>;

@Schema()
export class DayEntry {
  @Prop({ type: Date, required: true })
  date: Date;
}

export const DayEntrySchema = SchemaFactory.createForClass(DayEntry);
