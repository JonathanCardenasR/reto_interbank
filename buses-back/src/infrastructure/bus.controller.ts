import { Controller, Get, Inject, Param, Put } from '@nestjs/common';
import { IBusUseCaseService } from 'src/application/bus-use-case.interface';
import { BusUseCaseService } from 'src/application/bus-use-case.service';
import { BusDto } from './dto/bus.dto';

@Controller('bus')
export class BusController {
  constructor(
    @Inject(BusUseCaseService)
    private readonly busUseCaseService: IBusUseCaseService,
  ) {}

  @Get('/:placa/:operador')
  getBusByPlacaOperador(
    @Param('placa') placa: string,
    @Param('operador') operador: string,
  ): Promise<BusDto> {
    return this.busUseCaseService.getBusByPlacaOperador(placa, operador);
  }

  @Put()
  updateBus(bus: BusDto): Promise<void> {
    return this.busUseCaseService.updateBus(bus);
  }
}
