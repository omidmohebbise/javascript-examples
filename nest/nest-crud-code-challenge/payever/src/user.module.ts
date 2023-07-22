import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailService } from './email/email.service';
import { FileService } from './file/file.service';
import { RabbitMQService } from './message-broker/rabbitmq.service';
import { UserController } from './user/controller/user.controller';
import { UserSchema } from './user/document/user.document';
import { UserRepository } from './user/repository/user.repository';
import { UserService } from './user/service/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    RabbitMQService,
    EmailService,
    FileService,
  ],
})
export class UserModule {}
