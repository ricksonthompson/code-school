import { getRepository } from 'typeorm';

import User from '../models/User';

interface IUserDTO {
  id: number;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  public async execute({id, name, email, password}: IUserDTO): Promise<User | void> {
    const UsersRepository = await getRepository(User);

    
  }
}

export default UpdateUserService;
