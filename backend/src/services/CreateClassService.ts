import { getRepository } from 'typeorm';

import Class from '../models/Class';

interface IRequest {
  title: string;
  description: string;
  id_module: string;
  link: string;
}

class CreateClassService {
  public async execute({title, description, id_module, link} :IRequest) :Promise<Class> {
    const classRepository = getRepository(Class);

    const classVideo = await classRepository.create({
      title,
      description,
      id_module,
      link
    })

    await classRepository.save(classVideo);

    return classVideo;
  }
}

export default CreateClassService;
