import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {

    const users = await userRepository.find();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.json(userWithoutPassword);

}

public async update(request: Request, response: Response): Promise<Response> {

  const { id, name, email, password, old_password } = request.body;

  const updateUser = container.resolve(UpdateUserService);

  const user = await updateUser.execute({
    user_id: id,
    name,
    email,
    password,
    old_password,
  });

  return response.json(user);
}

public async delete(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const deleteUser = container.resolve(DeleteUserService);

  await deleteUser.execute(id);

  return response.status(204).send();
}
}
