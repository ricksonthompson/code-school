import { injectable, inject } from 'tsyringe';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';

interface IRequest {
  id: number;
  title: string;
  description: string;
  link: string;
  module_id: string;
}

@injectable()
class UpdateLessonService {

  constructor(
    @inject('LessonsRepository')
    private lessonsRepository : ILessonsRepository,
  ){}

  public async execute({ id, title, description, link, module_id }: IRequest): Promise<Lesson> {

    const lesson = await this.lessonsRepository.findById(id);

    lesson.title = title;
    lesson.description = description;
    lesson.link = link;
    lesson.module_id = module_id;

    await this.lessonsRepository.update(lesson);

    return lesson;
  }
}

export default UpdateLessonService;
