import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  email: string;

  @Prop()
  avator: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly avator: string;
}
