import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';


@injectable()
class ListUserService {

  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User> {

    const users = await this.usersRepository.findAll(id)

    return users;
  }
}

export default ListUserService;
