import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {RolEntity} from "./rol.entity";
import {RolService} from "./rol.service";

@Module({
  imports: [
      TypeOrmModule.forFeature(
          [UsuarioEntity, RolEntity],
          'default'
      )
  ],
  providers: [UsuarioService, RolService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
