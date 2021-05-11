import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Module from '@modules/module/infra/typeorm/entities/Module';
import IModulesRepository from '@modules/module/repositories/IModulesRepository';

@injectable()
class DeleteModuleService {

  constructor(
    @inject('ModulesRepository')
    private modulesRepository : IModulesRepository,
  ){}

  public async execute(id: string) :Promise<void> {

    const module = await this.modulesRepository.findById(id);

    if (!module) {
      throw new AppError('Module does not exists!');
    }

    await this.modulesRepository.remove(module);
  }
}

export default DeleteModuleService;
