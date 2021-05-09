import { request, Router } from 'express';
import { getRepository } from 'typeorm';

import Lesson from '../models/Lesson';
import CreateLessonService from '../services/CreateLessonService';
import UpdateLessonService from '../services/UpdateLessonService';
import DeleteLessonService from '../services/DeleteLessonService';

const lessonsRouter = Router();

lessonsRouter.get('/', async (request, response) => {
  const lessonsRepository = getRepository(Lesson);

  const lessons = await lessonsRepository.find();

  return response.json(lessons);
})

lessonsRouter.post('/', async (request, response) => {
  const { title, description, link, module_id } = request.body;

  const CreateLesson = new CreateLessonService();

  const lesson = await CreateLesson.execute({
    title,
    description,
    link,
    module_id,
  });

  return response.json(lesson);
});

lessonsRouter.put('/', async (request,response) => {
  const { id, title, description, link, module_id } = request.body;

  const UpdateLesson = new UpdateLessonService();

  const lesson = await UpdateLesson.execute({
    id,
    title,
    description,
    link,
    module_id
  })

  return response.json(lesson);
})

lessonsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const DeleteLesson = new DeleteLessonService();

  await DeleteLesson.execute(id)

  return response.status(204).send();
})

export default lessonsRouter;
