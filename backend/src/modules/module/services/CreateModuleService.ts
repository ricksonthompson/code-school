import { injectable, inject } from 'tsyringe';

import Module from '@modules/module/infra/typeorm/entities/Module';
import IModulesRepository from '@modules/module/repositories/IModulesRepository';

// import AppError from '../errors/AppError';

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class CreateModuleService {

  constructor(
    @inject('ModulesRepository')
    private modulesRepository : IModulesRepository,
  ){}

  public async execute({ title, description}: IRequest): Promise<Module> {

    const module = await this.modulesRepository.create({
      title,
      description,
    });

    return module;
  }
}

export default CreateModuleService;
