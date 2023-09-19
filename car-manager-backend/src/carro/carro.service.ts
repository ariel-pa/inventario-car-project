import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carro } from 'src/entity/Carro';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarroService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    @InjectRepository(Carro)
    private carrosRepository: Repository<Carro>,
  ) {}

  public async optenerCarros(): Promise<Carro[]> {
    return this.carrosRepository.find();
  }

  public async optenerUnCarroById(id: string): Promise<Carro> {
    const carro = this.carrosRepository.findOneBy({ id });
    if (!carro) throw new Error('Carro no encontrado');
    return carro;
  }

  public async optenerUnCarroByIdUsuario(id: string): Promise<Carro> {
    const carro = this.carrosRepository.findOneBy({ id });
    if (!carro) throw new Error('Carro no encontrado');
    return carro;
  }

  public async eliminarCarroById(id: string): Promise<void> {
    await this.carrosRepository.delete(id);
  }

  public async crearCarro(id: string, body: Partial<Carro>): Promise<Carro> {
    const usuario = await this.usuariosRepository.findOneBy({ id: id });
    if (!usuario)
      throw new NotFoundException(`No se encontro el usuario con id ${id}`);
    const carro = this.carrosRepository.create(body);
    carro.usuario = usuario;
    return this.carrosRepository.save(carro);
  }

  public async actualizarCarroById(
    id: string,
    usuarioId: string,
    body: Partial<Carro>,
  ) {
    const usuario = await this.usuariosRepository.findOneBy({ id: usuarioId });
    const miCarro = await this.optenerUnCarroById(id);
    if (!miCarro) throw new NotFoundException(`Carro no encontrado id ${id}`);
    miCarro.name = body.name;
    miCarro.model = body.model;
    miCarro.color = body.color;
    miCarro.description = body.description;
    miCarro.usuario = usuario;
    console.log(miCarro);
    return this.carrosRepository.save(miCarro);
  }

  public async optenerCarroByColor(color: string): Promise<Carro[]> {
    const carros = this.carrosRepository.find({ where: { color } });
    return carros;
  }
}
