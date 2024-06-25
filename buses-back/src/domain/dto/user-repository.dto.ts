export interface IUserRepositoryDto {
  username: string;
  password: string;
  role: string;
}

export interface IGetUserRepositoryDto extends IUserRepositoryDto {
  id: number;
}
