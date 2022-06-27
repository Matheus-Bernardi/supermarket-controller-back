import { plainToClass } from '@nestjs/class-transformer';
import { UserInput } from '../../dto/user-input.dto';

export class UserInputHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createPlain(): any {
    return {
      email: 'john.doe@gmail.com',
      phone: '54 999999999',
    };
  }

  static createClass(): UserInput {
    return plainToClass(UserInput, UserInputHelper.createPlain());
  }
}
