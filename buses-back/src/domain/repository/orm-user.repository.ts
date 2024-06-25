import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IGetUserRepositoryDto } from '../dto/user-repository.dto';
import { IOrmUserRepository } from './orm-user.repository.interface';

@Injectable()
export class OrmUserRepository
  extends Repository<UserEntity>
  implements IOrmUserRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async getUserByUsername(username: string): Promise<IGetUserRepositoryDto> {
    const userFound = await this.findOne({
      where: { username: username },
    });

    if (!userFound) throw new Error('User not found');

    return userFound;
  }

  async createUser(newUser: IGetUserRepositoryDto): Promise<void> {
    await this.save(newUser);
  }
}
