import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('')
  async healthcheck(): Promise<object> {
    return {
      message: 'Hello World!'
    };
  }
}
