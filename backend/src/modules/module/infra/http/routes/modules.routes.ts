import { Router } from 'express';
import { getRepository } from 'typeorm';

import Module from '@modules/module/infra/typeorm/entities/Module';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CreateModuleService from '@modules/module/services/CreateModuleService';
import UpdateModuleService from '@modules/module/services/UpdateModuleService';
import DeleteModuleService from '@modules/module/services/DeleteModuleService';

const modulesRouter = Router();

modulesRouter.use(ensureAuthenticated);

modulesRouter.get('/', async (request, response) => {
  const moduleRepository = getRepository(Module);

  const modules = await moduleRepository.find();

  return response.json(modules);
})

modulesRouter.post('/', async (request, response) => {
  try {
    const { title, description } = request.body;

    const CreateModule = new CreateModuleService();

    const module = await CreateModule.execute({
      title,
      description
    });

    return response.json(module);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

modulesRouter.put('/', async (request, response) => {
  const { id, title, description } = request.body;

  const UpdateModule = new UpdateModuleService();

  const module = await UpdateModule.execute({
    id,
    title,
    description,
  });

  return response.json(module);

});

modulesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const DeleteModule = new DeleteModuleService();

  await DeleteModule.execute(id);

  return response.status(204).send();
});

export default modulesRouter;
