import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { RabbitMQService } from 'src/message-broker/rabbitmq.service';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { FileService } from '../../file/file.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, User } from '../document/user.document';

@Injectable()
export class UserService {
  constructor(
    private readonly emailService: EmailService,
    private readonly rabbitMQService: RabbitMQService,
    private readonly userRepository: UserRepository,
    private readonly fileService: FileService,
    @InjectModel(User.name) private readonly userModel: Model<IUser>,
  ) {}

  async createUser(userData: CreateUserDto, avatar: Express.Multer.File) {
    const user: IUser = new User({
      name: userData.name,
      email: userData.email,
      avator: this.fileService.saveFile(avatar),
    });
    this.userRepository.createUser(user);

    // Implement the logic to store the user entry in the database
    // Send dummy emails and RabbitMQ events
    // Return the created user
  }

  async getUser(userId: string) {
    // Retrieve data from https://reqres.in/api/users/{userId}
    // Return the user
  }

  async getUserAvatar(userId: string) {
    // Retrieve the avatar image by 'avatar' URL
    // On first request, save the image as a plain file and store it in MongoDB
    // Return the base64-encoded representation of the image
    // On subsequent requests, retrieve the saved file from the database and return it as base64-encoded
  }

  async deleteUserAvatar(userId: string) {
    // Remove the avatar file from the file system storage
    // Delete the corresponding entry from the database
  }
}
