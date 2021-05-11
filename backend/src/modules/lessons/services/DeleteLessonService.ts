import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';

@injectable()
class DeleteLessonService {

  constructor(
    @inject('LessonsRepository')
    private lessonsRepository : ILessonsRepository,
  ){}

  public async execute(id: number) :Promise<void> {

    const lesson = await this.lessonsRepository.findById(id);

    if (!lesson) {
      throw new AppError('Lesson does not exists!');
    }

    await this.lessonsRepository.remove(lesson);
  }
}

export default DeleteLessonService;
