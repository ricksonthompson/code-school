import AppError from '@shared/errors/AppError';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

class DeleteUserService {

  public async execute(id: string) :Promise<undefined> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
