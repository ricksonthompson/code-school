import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateClassService from '../services/CreateClassService';
import Class from '../models/Class'

const classesRouter = Router();

classesRouter.use(ensureAuthenticated);

classesRouter.post('/', async (request, response) => {
  const { title, description, id_module, link } = request.body;

  const CreateClass = new CreateClassService();

  const classVideo = await CreateClass.execute({
    title,
    description,
    id_module,
    link,
  });

  return response.json(classVideo);
})

export default classesRouter;
