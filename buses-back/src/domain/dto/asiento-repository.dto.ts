export interface IAsientoRepositoryDto {
  type: string;
  value: boolean;
  description: string;
}

export interface IGetAsientoRepositoryDto extends IAsientoRepositoryDto {
  id: number;
}
