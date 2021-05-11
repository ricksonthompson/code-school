import Module from '@modules/module/infra/typeorm/entities/Module';

import ICreateModuleDTO from '../dtos/ICreateModuleDTO';

export default interface IModulesRepositoryDTO {
  findById(id: string): Promise<Module | undefined>;
  findAllModules(): Promise<Module[]>;
  // findLessonsByModules(): Promise<>;
  remove(module: Module): Promise<Module | undefined>;
  create(data: ICreateModuleDTO): Promise<Module>;
  update(module: Module): Promise<Module | undefined>;
}
