import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateModuleService from '@modules/module/services/CreateModuleService';
import DeleteModuleService from '@modules/module/services/DeleteModuleService';
import ListModuleService from '@modules/module/services/ListModuleService';
import UpdateModuleService from '@modules/module/services/UpdateModuleService';

export default class ModulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { title, description } = request.body;

      const CreateModule = container.resolve(CreateModuleService);

      const module = await CreateModule.execute({
        title,
        description
      });

      return response.json(module);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, title, description } = request.body;

    const UpdateModule = container.resolve(UpdateModuleService);

    const module = await UpdateModule.execute({
      id,
      title,
      description,
    });

    return response.json(module);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const DeleteModule = container.resolve(DeleteModuleService);

    await DeleteModule.execute(id);

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listModule = container.resolve(ListModuleService);

    const modules = await listModule.execute();

    return response.json(modules);
  }
}
