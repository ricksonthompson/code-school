import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class ListUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository : IUsersRepository,
  ){}

  public async execute(): Promise<User[]> {

    const users = await this.usersRepository.findUsers();

    return users;
  }
}

export default ListUserService;
