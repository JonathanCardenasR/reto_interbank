import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'src/infrastructure/dto/user.dto';
import { IUserUseCaseService } from './user-use-case.interface';
import { OrmUserRepository } from 'src/domain/repository/orm-user.repository';
import { IOrmUserRepository } from 'src/domain/repository/orm-user.repository.interface';

@Injectable()
export class UserUseCaseService implements IUserUseCaseService {
  constructor(
    @Inject(OrmUserRepository)
    private readonly ormUserRepository: IOrmUserRepository,
  ) {}

  async getUserByUsername(username: string): Promise<UserDto> {
    const user = await this.ormUserRepository.getUserByUsername(username);
    return user;
  }
}
