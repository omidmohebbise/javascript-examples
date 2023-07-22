import { Module } from '@nestjs/common';

import { EmailService } from './email/email.service';
import { RabbitMQService } from './message-broker/rabbitmq.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:123@localhost:27017', {
      dbName: 'testdb',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
