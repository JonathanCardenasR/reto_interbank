import { IGetReservaRepositoryDto } from '../dto/reserva-repository.dto';

export interface IOrmReservaRepository {
  getReservaByUser(userId: number): Promise<IGetReservaRepositoryDto[]>;
  updateReserva(reserva: IGetReservaRepositoryDto): Promise<void>;
}
