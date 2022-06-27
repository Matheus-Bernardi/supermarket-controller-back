import { Test, TestingModule } from '@nestjs/testing';
import { assert } from 'chai';
import 'reflect-metadata';
import * as sinon from 'sinon';
import { UserService } from '../users.service';
import { UserEntityHelper } from './helpers/user.entity.helper';
import { UserInputHelper } from './helpers/create-user.dto.helper';
import { UserRepository } from '../users.repository';

describe('Users service', () => {
  const userRepository = sinon.createStubInstance(UserRepository);

  let userService: UserService;

  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: userRepository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  afterEach(async () => {
    sinon.reset();
    await module.close();
  });

  it('Should create a user', async () => {
    const user = UserEntityHelper.createClass();
    const userCreateDto = UserInputHelper.createClass();

    userRepository.insertUser.withArgs(sinon.match(userCreateDto)).resolves(user);

    const result = await userService.postUser(userCreateDto);

    assert.deepEqual(result, user);

    sinon.assert.calledOnceWithExactly(
      userRepository.insertUser,
      sinon.match(userCreateDto),
    );
  });

  it('Should find all users by email', async () => {
    const user = UserEntityHelper.createClass();

    userRepository.selectUserByEmail.resolves(user);

    const result = await userService.getUserByEmail(user.email);

    assert.deepEqual(result, user);

    sinon.assert.calledOnceWithExactly(
      userRepository.selectUserByEmail,
      user.email,
    );
  });

  it('Should remove a user', async () => {
    const user = UserEntityHelper.createClass();

    userRepository.deleteUser.resolves();

    await userService.deleteUser(user.id);

    sinon.assert.calledOnceWithExactly(
      userRepository.deleteUser,
      user.id,
    );
  });
});
