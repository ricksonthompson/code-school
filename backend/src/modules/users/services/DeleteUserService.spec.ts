import FakeUsersRepository from '../repositories/fakes/FakesUsersRepository';
import DeleteUserService from './DeleteUserService';

let fakeUsersRepository: FakeUsersRepository;
let deleteUser: DeleteUserService;

describe('DeleteUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    deleteUser = new DeleteUserService(fakeUsersRepository);
  });

  it('should be able to delete a user', async () => {
    await deleteUser.execute({
      id: '1',
      
    });
  });
});
