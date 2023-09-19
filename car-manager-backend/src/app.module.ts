import { Module } from '@nestjs/common';
import { CarroModule } from './carro/carro.module';
import { dbConfig } from './dbConfig';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [dbConfig, CarroModule, UsuarioModule],
})
export class AppModule {}
