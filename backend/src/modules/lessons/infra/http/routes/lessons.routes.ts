import { Router } from 'express';
import { getRepository } from 'typeorm';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CreateLessonService from '@modules/lessons/services/CreateLessonService';
import UpdateLessonService from '@modules/lessons/services/UpdateLessonService';
import DeleteLessonService from '@modules/lessons/services/DeleteLessonService';

const lessonsRouter = Router();

lessonsRouter.use(ensureAuthenticated);

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
