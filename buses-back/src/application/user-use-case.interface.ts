import { UserDto } from 'src/infrastructure/dto/user.dto';

export interface IUserUseCaseService {
  getUserByUsername(username: string): Promise<UserDto>;
}

export interface IResponse {
  message: string;
  code: number;
}
