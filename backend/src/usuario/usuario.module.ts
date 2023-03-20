import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {RolEntity} from "./rol.entity";
import {RolService} from "./rol.service";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
      TypeOrmModule.forFeature(
          [UsuarioEntity, RolEntity],
          'default'
      ),
      JwtModule.register({secret: '$up3r$3cr3t'})
  ],
  providers: [UsuarioService, RolService],
  controllers: [UsuarioController],
    exports: [JwtModule]
})
export class UsuarioModule {}
