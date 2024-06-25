export interface IItinerarioRepositoryDto {
  ciudadOrigen: string;
  ciudadDestino: string;
  horaSalida: string;
  horaLlegada: string;
  precio: number;
  busId: number;
}

export interface IGetItinerarioRepositoryDto extends IItinerarioRepositoryDto {
  id: number;
}
