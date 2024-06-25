export interface IBusRepositoryDto {
  placa: string;
  operador: string;
}

export interface IGetBusRepositoryDto extends IBusRepositoryDto {
  id: number;
}
