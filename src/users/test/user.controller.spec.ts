import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { assert } from 'chai';
import 'reflect-metadata';
import * as sinon from 'sinon';
import * as request from 'supertest';
import { UserService } from '../user.service';
import { UserEntityHelper } from './helpers/user.entity.helper';
import { UserInputHelper } from './helpers/create-user.dto.helper';
import { UserDTO } from '../dto/user.dto';
import { UserController } from '../user.controller';

describe('User controller', () => {
  const matchFields = (actualUser: UserDTO, expectedUser: UserDTO): void => {
    assert.equal(actualUser.email, expectedUser.email);
    assert.equal(actualUser.phone, expectedUser.phone);
  };

  const userService = sinon.createStubInstance(UserService);

  let app: INestApplication;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: userService,
        },
      ],
    }).compile();

    app = module.createNestApplication();

    await app.init();
  });

  afterEach(async () => {
    sinon.reset();
    await app.close();
    await module.close();
  });

  it('Should create a new user', async () => {
    const user = UserEntityHelper.createClass();
    const userCreateDto = UserInputHelper.createPlain();

    userService.postUser.withArgs(sinon.match(userCreateDto)).resolves(user);

    const response = await request(app.getHttpServer())
      .post(`/users`)
      .send(userCreateDto);

    assert.equal(response.status, HttpStatus.CREATED);

    const resultUser = response.body;

    matchFields(resultUser, user);

    sinon.assert.calledOnceWithExactly(userService.postUser, userCreateDto);
  });

  it('Should get user by email', async () => {
    const user = UserEntityHelper.createClass();

    userService.getUserByEmail.resolves(user);

    const response = await request(app.getHttpServer())
      .get(`/users`)
      .query({ email: user.email });

    assert.equal(response.status, HttpStatus.OK);

    const resultUser = response.body;

    matchFields(resultUser, user);

    sinon.assert.calledOnceWithExactly(userService.getUserByEmail, user.email);
  });

  it('Should delete a user by id', async () => {
    const user = UserEntityHelper.createClass();

    userService.deleteUser.resolves();

    const response = await request(app.getHttpServer()).delete(
      `/users/${user.id}`,
    );

    assert.equal(response.status, HttpStatus.NO_CONTENT);
    sinon.assert.calledOnceWithExactly(userService.deleteUser, user.id);
  });
});
