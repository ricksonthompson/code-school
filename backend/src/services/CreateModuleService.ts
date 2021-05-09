import { getRepository } from 'typeorm';

import Module from '../models/Module';

// import AppError from '../errors/AppError';

interface IRequest {
  title: string;
  description: string;
}

class CreateModuleService {
  public async execute({ title, description}: IRequest): Promise<Module> {
    const modulesRepository = getRepository(Module);

    // const checkModuleExists = await modulesRepository.findOne(title);

    // if(checkModuleExists) {
    //   throw new AppError('Module title already exists.')
    // }

    const module = modulesRepository.create({
      title,
      description,
    });

    await modulesRepository.save(module);

    return module;
  }
}

export default CreateModuleService;
