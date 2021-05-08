import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  user_id: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

// ✅ 1. Definir params que vou receber
// ✅ 2. Validar se user existe
// ✅ 3. Vou atribuir os params ao campos que quero atualizar
// ✅ 4. Fazer as validações que eu quero
// 5. Email:
//   ✅ Verificar se a velha e a nova estão presentes
//   ✅ verificar se as duas senhas
//   "✅ Update user"
//   - gerar um hash pra nova senha
//   - Salvar user

class UpdateUserService {
  public async execute({user_id, name, email, password, old_password}: IRequest): Promise<User | void> {
    const usersRepository = await getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    user.name = name;
    user.email = email;

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
    return usersRepository.save(user);
  }
}

export default UpdateUserService;
