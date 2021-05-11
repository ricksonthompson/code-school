import { compare, hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

class UpdateUserService {

  public async execute({user_id, name, email, password, old_password}: IRequest): Promise<User | undefined> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    user.name = name;
    user.email = email;

    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    if(password && !old_password) {
      throw new AppError('You need to inform old password to set a new password.')
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }
      user.password = await hash(password, 8);
    }
    return await usersRepository.save(user);
  }
}

export default UpdateUserService;
