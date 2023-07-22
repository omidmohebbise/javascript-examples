import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitMQService {
  publishEvent(payload: any) {
    // Dummy implementation to log the RabbitMQ event payload
    console.log('Publishing event:', payload);
  }
}
