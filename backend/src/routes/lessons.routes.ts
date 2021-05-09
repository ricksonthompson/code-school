import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateLessonService from '../services/CreateLessonService';
import Lesson from '../models/Lesson';

const lessonsRouter = Router();

lessonsRouter.use(ensureAuthenticated);

lessonsRouter.post('/', async (request, response) => {
  const { title, description, link, module_id } = request.body;

  const CreateLesson = new CreateLessonService();

  const classVideo = await CreateLesson.execute({
    title,
    description,
    link,
    module_id,
  });

  return response.json(classVideo);
})

export default lessonsRouter;
