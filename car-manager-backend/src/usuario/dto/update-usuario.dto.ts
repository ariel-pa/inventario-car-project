import { PartialType } from '@nestjs/mapped-types';
import { Carro } from 'src/entity/Carro';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  edad: number;
  documento_identidad: string;
  carros: Carro[];
}
