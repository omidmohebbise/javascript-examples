import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../document/user.document';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(userData: any): Promise<User> {
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async getUserById(userId: string): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  async deleteUser(userId: string): Promise<User> {
    return this.userModel.findByIdAndDelete(userId).exec();
  }
}
