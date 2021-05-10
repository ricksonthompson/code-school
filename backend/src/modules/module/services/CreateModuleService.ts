import { getRepository } from 'typeorm';

import Module from '@modules/module/infra/typeorm/entities/Module';

// import AppError from '../errors/AppError';

class CreateModuleService {
  public async execute({ title, description}: IRequest): Promise<Module> {
    const modulesRepository = getRepository(Module);

    const module = modulesRepository.create({
      title,
      description,
    });

    await modulesRepository.save(module);

    return module;
  }
}

export default CreateModuleService;
