import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BusEntity } from '../entities/bus.entity';
import { IOrmBusRepository } from './orm-bus.repository.interface';
import { IGetBusRepositoryDto } from '../dto/bus-repository.dto';

@Injectable()
export class OrmBusRepository
  extends Repository<BusEntity>
  implements IOrmBusRepository
{
  constructor(dataSource: DataSource) {
    super(BusEntity, dataSource.createEntityManager());
  }

  async getBusByPlacaOperador(
    placa: string,
    operador: string,
  ): Promise<IGetBusRepositoryDto> {
    const busFound = await this.findOne({
      where: { placa: placa, operador: operador },
    });

    if (!busFound) throw new Error('Bus not found');

    return busFound;
  }

  async updateBus(bus: IGetBusRepositoryDto): Promise<void> {
    await this.save(bus);
  }
}
