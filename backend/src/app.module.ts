import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {RolEntity} from "./usuario/rol.entity";

@Module({
  imports: [
      UsuarioModule,
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './bdd/bdd.sqlite',
        entities: [
            UsuarioEntity, RolEntity
        ],
        synchronize: true,
        dropSchema: true
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
