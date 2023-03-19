import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService],
      imports: [
        TypeOrmModule.forFeature(
            [UsuarioEntity],
            'default'
        )
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Deberia crear un usuario', () => {
    const usuario = {
      nombre: 'Adrian',
      correo: 'cadrian_2001@hotmail.com',
      contrasena: '123456789'
    };
    const respuesta = service.create(usuario);
    expect(respuesta).toBe(usuario);
  })
});
