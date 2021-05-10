import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Module from '@modules/module/infra/typeorm/entities/Module';

interface IRequest {
  id: number;
  title: string;
  description: string;
}

class UpdateModuleService {
  public async execute({ id, title, description }: IRequest): Promise<Module | void> {
    const modulesRepository = getRepository(Module);

    const module = await modulesRepository.findOne(id)

    module.title = title;
    module.description = description;

    await modulesRepository.save(module);

    return module;
  }
}

export default UpdateModuleService;
