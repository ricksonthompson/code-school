import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

class DeleteUserService {

  constructor(
    private usersRepository : IUsersRepository,
  ){}

  public async execute(id: number) :Promise<User | undefined> {

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    return await this.usersRepository.remove(user);
  }
}

export default DeleteUserService;
