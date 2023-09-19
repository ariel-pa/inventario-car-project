import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'carros' })
export class Carro {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  model: string;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  description: string;

  @JoinTable()
  @ManyToOne(() => Usuario, (usuario) => usuario.carros)
  usuario: Usuario;
}
