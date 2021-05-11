import { injectable, inject } from 'tsyringe';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';

@injectable()
class ListLessonService {

  constructor(
    @inject('LessonsRepository')
    private lessonsRepository : ILessonsRepository,
  ){}

  public async execute(): Promise<Lesson[]> {
    const lessons = await this.lessonsRepository.findAllLessons();

    return lessons;
  }
}

export default ListLessonService;
