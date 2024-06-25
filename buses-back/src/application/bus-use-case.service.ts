import { Inject, Injectable } from '@nestjs/common';
import { IBusUseCaseService } from './bus-use-case.interface';
import { OrmBusRepository } from 'src/domain/repository/orm-bus.repository';
import { IOrmBusRepository } from 'src/domain/repository/orm-bus.repository.interface';
import { BusDto } from 'src/infrastructure/dto/bus.dto';

@Injectable()
export class BusUseCaseService implements IBusUseCaseService {
  constructor(
    @Inject(OrmBusRepository)
    private readonly ormBusRepository: IOrmBusRepository,
  ) {}

  async getBusByPlacaOperador(
    placa: string,
    operador: string,
  ): Promise<BusDto> {
    const bus = await this.ormBusRepository.getBusByPlacaOperador(
      placa,
      operador,
    );
    return bus;
  }

  async updateBus(bus: BusDto): Promise<void> {
    await this.ormBusRepository.updateBus(bus);
  }
}
