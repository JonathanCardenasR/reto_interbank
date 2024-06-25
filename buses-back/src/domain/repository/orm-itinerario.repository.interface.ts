import { IGetItinerarioRepositoryDto } from '../dto/itinerario-repository.dto';

export interface IOrmItinerarioRepository {
  getItinerarioById(id: number): Promise<IGetItinerarioRepositoryDto>;
}
