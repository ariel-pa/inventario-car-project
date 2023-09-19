export class CreateCarroDTO {
  name: string;
  model: string;
  color: string;
  description: string;
  usuarioId: string;
}
export class UpdateCarroDTO {
  name?: string;
  model?: string;
  color?: string;
  description: string;
  usuarioId: string;
}
