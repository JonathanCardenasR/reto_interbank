export interface IReservaRepositoryDto {
  userId: number;
  asientoId: number;
  busId: number;
}

export interface IGetReservaRepositoryDto extends IReservaRepositoryDto {
  id: number;
}
