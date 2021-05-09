import { getRepository } from 'typeorm';

import Class from '../models/Class';

interface IRequest {
  title: string;
  description: string;
  thumbnail?: string;
}

class CreateClassService {
  public async execute({title, description, thumbnail} :IRequest) :Promise<Class> {
    const classRepository = getRepository(Class);

    const classVideo = await classRepository.create({
      title,
      description,
      thumbnail,
    })

    await classRepository.save(classVideo);

    return classVideo;
  }
}

export default CreateClassService;
