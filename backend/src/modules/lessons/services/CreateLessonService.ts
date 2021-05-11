import { injectable, inject } from 'tsyringe';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';

interface IRequest {
  title: string;
  description: string;
  module_id: string;
  link: string;
}

@injectable()
class CreateClassService {

  constructor(
    @inject('LessonsRepository')
    private lessonsRepository : ILessonsRepository,
  ){}

  public async execute({title, description, module_id, link} :IRequest) :Promise<Lesson> {

    const lesson = await this.lessonsRepository.create({
      title,
      description,
      link,
      module_id,
    });

    return lesson;
  }
}

export default CreateClassService;
