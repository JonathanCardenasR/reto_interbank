import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IUserUseCaseService } from 'src/application/user-use-case.interface';
import { UserUseCaseService } from 'src/application/user-use-case.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserUseCaseService)
    private readonly userUseCaseService: IUserUseCaseService,
  ) {}

  @Get(':username')
  getUser(@Param('username') username: string): Promise<UserDto> {
    return this.userUseCaseService.getUserByUsername(username);
  }
}
