import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  public async crearUsuario(usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosRepository.save(usuario);
  }

  public async optenerTodoUsuarios(): Promise<Usuario[]> {
    return this.usuariosRepository.find({ relations: ['carros'] });
  }

  public async optenerUnUsuarioById(id: string): Promise<Usuario> {
    const usuario = this.usuariosRepository.findOneBy({ id });
    if (!usuario) throw new Error('Usuario no encontrado');
    return usuario;
  }

  public async actualizarUsuarioById(id: string, usuario: Partial<Usuario>) {
    const miUsuario = await this.optenerUnUsuarioById(id);
    if (!miUsuario) throw new Error('Usuario no encontrado');
    miUsuario.nombre = usuario.nombre;
    miUsuario.primer_apellido = usuario.primer_apellido;
    miUsuario.segundo_apellido = usuario.segundo_apellido;
    miUsuario.edad = usuario.edad;
    miUsuario.documento_identidad = usuario.documento_identidad;

    return this.usuariosRepository.save(miUsuario);
  }

  public async eliminarUsuarioById(id: string): Promise<void> {
    await this.usuariosRepository.delete(id);
  }

  public async optenerUsuariosMenoresMayoresEdad({ menor, mayor }): Promise<{
    usuariosMayoresEdad: Usuario[];
    usuariosMenoresEdad: Usuario[];
  }> {
    const usuariosMayoresEdad = await this.usuariosRepository.find({
      where: {
        edad: MoreThan(mayor),
      },
    });

    const usuariosMenoresEdad = await this.usuariosRepository.find({
      where: {
        edad: LessThan(menor),
      },
    });

    return {
      usuariosMayoresEdad,
      usuariosMenoresEdad,
    };
  }
}
