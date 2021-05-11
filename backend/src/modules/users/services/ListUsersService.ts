import User from '@modules/users/infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

class ListUserService {

  public async execute(): Promise<User[]> {
    const usersRepository = new UsersRepository;

    const users = await usersRepository.findUsers();

    return users;
  }
}

export default ListUserService;
