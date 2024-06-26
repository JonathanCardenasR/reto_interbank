import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_DATABASE } from './infrastructure/config-database';
import { UserEntity } from './domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserUseCaseService } from './application/user-use-case.service';
import { OrmUserRepository } from './domain/repository/orm-user.repository';
import { BusEntity } from './domain/entities/bus.entity';
import { ItinerarioEntity } from './domain/entities/itinerario.entity';
import { ReservaEntity } from './domain/entities/reserva.entity';
import { AsientoEntity } from './domain/entities/asiento.entity';
import { UserController } from './infrastructure/user.controller';
import { BusController } from './infrastructure/bus.controller';
import { BusUseCaseService } from './application/bus-use-case.service';
import { OrmBusRepository } from './domain/repository/orm-bus.repository';

@Module({
  imports: [
    CONFIG_DATABASE(),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([BusEntity]),
    TypeOrmModule.forFeature([ItinerarioEntity]),
    TypeOrmModule.forFeature([ReservaEntity]),
    TypeOrmModule.forFeature([AsientoEntity]),
  ],
  controllers: [AppController, UserController, BusController],
  providers: [
    AppService,
    UserUseCaseService,
    BusUseCaseService,
    OrmUserRepository,
    OrmBusRepository,
  ],
})
export class AppModule {}
