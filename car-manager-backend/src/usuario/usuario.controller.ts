import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async optenerUsuarios(
    @Query() filterQuery: { menor: number; mayor: number },
  ) {
    if (Object.keys(filterQuery).length) {
      return this.usuarioService.optenerUsuariosMenoresMayoresEdad(filterQuery);
    }
    return this.usuarioService.optenerTodoUsuarios();
  }

  @Post()
  async crearUsuario(@Body() request: CreateUsuarioDto) {
    return this.usuarioService.crearUsuario(request);
  }

  @Get(':id')
  async optenerUnUsuarioById(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.optenerUnUsuarioById(id);
  }

  @Put(':id')
  async actualizarUsuarioById(
    @Param('id') id: string,
    @Body() request: UpdateUsuarioDto,
  ) {
    return this.usuarioService.actualizarUsuarioById(id, request);
  }

  @Delete(':id')
  async eliminarUsuarioById(@Param('id') id: string) {
    return this.usuarioService.eliminarUsuarioById(id);
  }
}
