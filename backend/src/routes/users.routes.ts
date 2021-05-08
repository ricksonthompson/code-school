import { Router } from 'express';
import {getRepository} from 'typeorm';

import CreateUserService from '../services/CreateUserService';
import User from '../models/User';
import DeleteUserService from '../services/DeleteUserService';
import UpdateProfile from '../services/UpdateUserService';
import UpdateUserService from '../services/UpdateUserService';

const usersRouter = Router();


usersRouter.get('/', async (request, response) => {
  const userRepository = getRepository(User);

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

usersRouter.put('/', async (request, response) => {
  const { id, name, email, password, old_password } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    user_id: id,
    name,
    email,
    password,
    old_password,
  });

  return response.json(user);

});

usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteUser = new DeleteUserService();

  await deleteUser.execute(id);

  return response.status(204).send();
});

export default usersRouter;
