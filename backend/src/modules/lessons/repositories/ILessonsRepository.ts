import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';

import ICreateLessonDTO from '../dtos/ICreateLessonDTO';

export default interface ILessonsRepository {
  findById(id: number): Promise<Lesson | undefined>;
  findAllLessons(): Promise<Lesson[]>;
  // findLessonsByModule()
  create(data: ICreateLessonDTO): Promise<Lesson>;
  update(lesson: Lesson): Promise<Lesson | undefined>;
  remove(lesson: Lesson): Promise<Lesson | undefined>;
}
