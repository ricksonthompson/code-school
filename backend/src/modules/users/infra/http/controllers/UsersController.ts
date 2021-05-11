import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';
import ListUserService from '@modules/users/services/ListUsersService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {

    const ListUser = new ListUserService();

    const users = await ListUser.execute();
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

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

  const { user_id, name, email, password, old_password } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    user_id,
    name,
    email,
    password,
    old_password,
  });

  return response.json(user);
}

public async delete(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const deleteUser = new DeleteUserService();

  await deleteUser.execute(id);

  return response.status(204).send();
}
}
