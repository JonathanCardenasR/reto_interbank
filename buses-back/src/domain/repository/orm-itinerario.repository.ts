import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ItinerarioEntity } from '../entities/itinerario.entity';
import { IOrmItinerarioRepository } from './orm-itinerario.repository.interface';
import { IGetItinerarioRepositoryDto } from '../dto/itinerario-repository.dto';

@Injectable()
export class OrmItinerarioRepository
  extends Repository<ItinerarioEntity>
  implements IOrmItinerarioRepository
{
  constructor(dataSource: DataSource) {
    super(ItinerarioEntity, dataSource.createEntityManager());
  }

  async getItinerarioById(id: number): Promise<IGetItinerarioRepositoryDto> {
    const itinerarioFound = await this.findOne({
      where: { id: id },
    });

    if (!itinerarioFound) throw new Error('Itinerario not found');

    return itinerarioFound;
  }
}
