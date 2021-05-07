import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

/*
Somente a classe/repository pode alterar uma informação dentro da classe,ou seja,
é de total responsabilidade do repositorio

Repository é responsável por lidar com a persistência dos dados
*/

@EntityRepository(Appointment)
// Um decorator deve ser declarado acima da class, pois ela se torna um param dele
class AppointmentRepository extends Repository<Appointment> {
  // Vai utlizar as funções de repository de dentro do TypeORM

  // O TypeORM já possui todas as operações para realizar no banco
  // Só adiciono aqui quando eu preciso fazer uma oper específica
  // Em um método de uma classe é obrigatório definir qual o retorno dela
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      // this é usado pra acessar a var de uma class
      where: { date },
    });

    return findAppointment || null;
    // '||' funcionam com um else
  }
}

export default AppointmentRepository;
