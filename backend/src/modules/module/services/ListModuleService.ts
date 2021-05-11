import { injectable, inject } from 'tsyringe';

import Module from '@modules/module/infra/typeorm/entities/Module';
import IModulesRepository from '@modules/module/repositories/IModulesRepository';

@injectable()
class ListModuleService {

  constructor(
    @inject('ModulesRepository')
    private modulesRepository : IModulesRepository,
  ){}

  public async execute(): Promise<Module[]> {

    const module = await this.modulesRepository.findAllModules();

    return module;
  }
}

export default ListModuleService;
