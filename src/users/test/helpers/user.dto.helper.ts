import { plainToClass } from '@nestjs/class-transformer';
import { UserDTO } from '../../dto/user.dto';

export class UserDtoHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createPlain(): any {
    return {
      id: 'c52a1190-d3f9-4cb5-8572-d3f624c9d9a3',
      email: 'john.doe@gmail.com',
      phone: '54 9 9999-9999',
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static createClass(): UserDTO {
    return plainToClass(UserDTO, UserDtoHelper.createPlain());
  }
}
