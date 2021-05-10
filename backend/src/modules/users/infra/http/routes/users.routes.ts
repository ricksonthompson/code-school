import { Router } from 'express';

import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/UpdateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController;

// usersRouter.get('/', async (request, response) => {
//   const usersRepository = new UsersRepository();

//   const users = await userRepository.find();

//   return response.json(users);
// })

usersRouter.post('/', usersController.create);

usersRouter.put('/', async (request, response) => {
  const usersRepository = new UsersRepository();

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
