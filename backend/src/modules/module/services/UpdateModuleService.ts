import { injectable, inject } from 'tsyringe';

import Module from '@modules/module/infra/typeorm/entities/Module';
import IModulesRepository from '@modules/module/repositories/IModulesRepository';

interface IRequest {
  id: string;
  title: string;
  description: string;
}

@injectable()
class UpdateModuleService {

  constructor(
    @inject('ModulesRepository')
    private modulesRepository : IModulesRepository,
  ){}

  public async execute({ id, title, description }: IRequest): Promise<Module | undefined> {
    const module = await this.modulesRepository.findById(id);

    module.title = title;
    module.description = description;

    await this.modulesRepository.update(module);

    return module;
  }
}

export default UpdateModuleService;
