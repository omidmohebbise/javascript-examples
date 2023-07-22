import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendEmail(payload: any) {
    // Dummy implementation to log the email payload
    console.log('Sending email:', payload);
  }
}
