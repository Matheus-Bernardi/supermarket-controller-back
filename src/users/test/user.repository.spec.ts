import { Test, TestingModule } from '@nestjs/testing';
import { assert } from 'chai';
import KnexBuilder from 'knex';
import { Knex } from 'nestjs-knex';
import * as sinon from 'sinon';
import { KNEX_TOKEN } from '../../constants';
import knexConfigs from '../../database/knexfile';
import { UserRepository } from '../users.repository';
import { UserEntityHelper } from './helpers/user.entity.helper';

describe('Users repository', () => {
  let userRepository: UserRepository;
  let knex: Knex;

  let module: TestingModule;

  beforeAll(async () => {
    knex = KnexBuilder(knexConfigs);
    await knex.migrate.rollback(undefined, true);
    await knex.migrate.latest();
  });

  afterAll(async () => {
    await knex.migrate.rollback(undefined, true);
    await knex.destroy();
  });

  beforeEach(async () => {
    await knex.seed.run();

    module = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: KNEX_TOKEN,
          useValue: knex,
        }
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
  });

  afterEach(async () => {
    sinon.reset();
    await module.close();
  });

  it('Should find user', async () => {
    const user = UserEntityHelper.createClass();

    const response = await userRepository.selectUserByEmail(user.email);

    assert.equal(response.email, user.email);
    assert.equal(response.phone, user.phone);

    assert.isDefined(response.id);
    assert.isDefined(response.created_at);
    assert.isDefined(response.updated_at);
  });

  it('Should create a user', async () => {
    const user = UserEntityHelper.createClass();
    user.email = 'test@gmail.com';
    const savedUser = await userRepository.insertUser(user);
    const dbUser = await userRepository.selectUserByEmail(user.email);

    assert.equal(savedUser.email, user.email);
    assert.equal(savedUser.phone, user.phone);

    assert.isDefined(savedUser.id);
    assert.isDefined(savedUser.created_at);
    assert.isDefined(savedUser.updated_at);

    assert.deepEqual(savedUser, dbUser);
  });

  it('Should delete a user by id', async () => {
    await userRepository.deleteUser('c52a1190-d3f9-4cb5-8572-d3f624c9d9a3');

    const user = await userRepository.selectUserByEmail(
      'test@gmail.com',
    );

    assert.isNull(user);
  });
});
