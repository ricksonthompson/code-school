import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Module from '@modules/module/infra/typeorm/entities/Module';

class DeleteModuleService {
  public async execute(id: string) :Promise<void> {
    const modulesRepository = await getRepository(Module);

    const module = await modulesRepository.findOne(id);

    if (!module) {
      throw new AppError('Module does not exists!');
    }

    await modulesRepository.remove(module);
  }
}

export default DeleteModuleService;
