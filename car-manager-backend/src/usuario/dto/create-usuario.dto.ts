import { Carro } from 'src/entity/Carro';

export class CreateUsuarioDto {
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  edad: number;
  documento_identidad: string;
  carros: Carro[];
}
