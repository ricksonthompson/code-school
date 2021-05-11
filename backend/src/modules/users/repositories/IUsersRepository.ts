import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFindAllDTO from '../dtos/IFindeAllDTO';

export default interface IUsersRepository {
  findAll(data: IFindAllDTO): Promise<User[]>;
  findUsers(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  remove(user: User): Promise<User | undefined>;
  save(user: User): Promise<User>;
}

