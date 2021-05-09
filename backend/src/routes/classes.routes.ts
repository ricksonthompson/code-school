import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateClassService from '../services/CreateClassService';
import Class from '../models/Class'

const classesRouter = Router();

classesRouter.post('/', async (request, response) => {
  const { title, description, thumbnail } = request.body;

  const CreateClass = new CreateClassService();

  const classVideo = await CreateClass.execute({
    title,
    description,
    thumbnail
  });

  return response.json(classVideo);
})

export default classesRouter;
