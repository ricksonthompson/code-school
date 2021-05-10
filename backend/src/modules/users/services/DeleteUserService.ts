import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class DeleteUserService {

  constructor(
    @inject('UserRepository')
      private usersRepository: IUsersRepository,
    ) {}

    public async execute(id: string) :Promise<void> {


    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    await this.usersRepository.remove(user);
  }
}

export default DeleteUserService;
