import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {RolEntity} from "./usuario/rol.entity";
import { TicketModule } from './ticket/ticket.module';
import {TicketEntity} from "./ticket/ticket.entity";
import {EstadoEntity} from "./ticket/estado.entity";
import {PrioridadEntity} from "./ticket/prioridad.entity";

@Module({
  imports: [
      UsuarioModule,
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './bdd/bdd.sqlite',
        entities: [
            UsuarioEntity, RolEntity, TicketEntity, EstadoEntity, PrioridadEntity
        ],
        synchronize: true,
        dropSchema: true
      }),
      TicketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
