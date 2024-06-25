import {
  IGetUserRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

export interface IOrmUserRepository {
  getUserByUsername(username: string): Promise<IGetUserRepositoryDto>;
  createUser(newUser: IUserRepositoryDto): Promise<void>;
}
