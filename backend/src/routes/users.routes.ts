import { Router } from 'express';
import {getCustomRepository} from 'typeorm';

import CreateUserService from '../services/CreateUserService';
import UserRepository from '../repositories/UsersRepository';

const usersRouter = Router();


usersRouter.get('/', async (request, response) => {
  const userRepository = getCustomRepository(UserRepository);

  const users = await userRepository.find();

  return response.json(users);
})

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const CreateUser = new CreateUserService();

    const user = await CreateUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
