import { IGetBusRepositoryDto } from '../dto/bus-repository.dto';

export interface IOrmBusRepository {
  getBusByPlacaOperador(
    placa: string,
    operador: string,
  ): Promise<IGetBusRepositoryDto>;

  updateBus(bus: IGetBusRepositoryDto): Promise<void>;
}
