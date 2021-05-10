import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

type IResponse = Array<User>;


@injectable()
class ListUserService {

  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User[]> {

    const users = await this.usersRepository.findAll({
      except_user_id: id,
    })

    return users;
  }
}

export default ListUserService;
