import { Carro } from 'src/entity/Carro';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  primer_apellido: string;

  @Column({ default: '' })
  segundo_apellido: string;

  @Column({ default: 0 })
  edad: number;

  @Column({ default: '' })
  documento_identidad: string;

  @JoinTable()
  @OneToMany(() => Carro, (carro) => carro.usuario, {
    cascade: true,
    eager: true,
  })
  carros: Carro[];
}
