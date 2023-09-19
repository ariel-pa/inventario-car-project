import { Module } from '@nestjs/common';
import { CarroController } from './carro.controller';
import { CarroService } from './carro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from '../entity/Carro';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carro, Usuario])],
  controllers: [CarroController],
  providers: [CarroService],
})
export class CarroModule {}
