import { plainToClass } from '@nestjs/class-transformer';
import { GetUserInput } from '../../dto/getUser-input.dto';

export class GetUserInputHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createPlain(): any {
    return {
      email: 'john.doe@gmail.com',
    };
  }

  static createClass(): GetUserInput {
    return plainToClass(GetUserInput, GetUserInputHelper.createPlain());
  }
}
