import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IOrmReservaRepository } from './orm-reserva.repository.interface';
import { ReservaEntity } from '../entities/reserva.entity';
import { IGetReservaRepositoryDto } from '../dto/reserva-repository.dto';

@Injectable()
export class OrmReservaRepository
  extends Repository<ReservaEntity>
  implements IOrmReservaRepository
{
  constructor(dataSource: DataSource) {
    super(ReservaEntity, dataSource.createEntityManager());
  }

  async getReservaByUser(userId: number): Promise<IGetReservaRepositoryDto[]> {
    const reservasFound = await this.find({
      where: { userId: userId },
    });

    return reservasFound;
  }

  async updateReserva(reserva: IGetReservaRepositoryDto): Promise<void> {
    await this.save(reserva);
  }
}
