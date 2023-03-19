import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
  imports: [
      UsuarioModule,
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './bdd/bdd.sqlite',
        entities: [
            UsuarioEntity
        ],
        synchronize: true,
        dropSchema: false
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
