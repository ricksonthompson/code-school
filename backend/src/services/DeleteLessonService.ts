import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Lesson from '../models/Lesson';

class DeleteLessonService {
  public async execute(id: string) :Promise<void> {
    const lessonsRepository = await getRepository(Lesson);

    const lesson = await lessonsRepository.findOne(id);

    if (!lesson) {
      throw new AppError('Lesson does not exists!');
    }

    await lessonsRepository.remove(lesson);
  }
}

export default DeleteLessonService;
