import { BusDto } from 'src/infrastructure/dto/bus.dto';

export interface IBusUseCaseService {
  getBusByPlacaOperador(placa: string, operador: string): Promise<BusDto>;
  updateBus(bus: BusDto): Promise<void>;
}

export interface IResponse {
  message: string;
  code: number;
}
