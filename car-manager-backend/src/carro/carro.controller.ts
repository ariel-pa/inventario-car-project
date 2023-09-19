import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCarroDTO, UpdateCarroDTO } from 'src/dto/carro.dto';
import { Carro } from 'src/entity/Carro';
import { CarroService } from './carro.service';

@Controller('car')
export class CarroController {
  constructor(private carService: CarroService) {}

  @Get()
  async optenerCarroByColor(@Query('color') color) {
    return this.carService.optenerCarroByColor(color);
  }
  @Get()
  async optenerCarros(): Promise<Carro[]> {
    return this.carService.optenerCarros();
  }
  @Get(':id')
  async optenerUnCarroById(@Param('id') id: string): Promise<Carro> {
    return this.carService.optenerUnCarroById(id);
  }

  @Get(':id/usuario')
  async optenerUnCarroByIdUsaurio(@Param('id') id: string): Promise<Carro> {
    return this.carService.optenerUnCarroByIdUsuario(id);
  }
  @Post()
  async crearCarro(@Body() body: CreateCarroDTO) {
    // console.log(request.usuarioId);
    return this.carService.crearCarro(body.usuarioId, body);
  }
  @Delete(':id')
  async eliminarCarroById(@Param('id') id: string) {
    return this.carService.eliminarCarroById(id);
  }
  @Put(':id')
  async actualizarCarroById(
    @Param('id') id: string,
    @Body() body: UpdateCarroDTO,
  ) {
    return this.carService.actualizarCarroById(id, body.usuarioId, body);
  }
}
