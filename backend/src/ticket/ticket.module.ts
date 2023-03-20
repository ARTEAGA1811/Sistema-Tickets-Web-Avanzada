import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TicketEntity} from "./ticket.entity";
import {EstadoEntity} from "./estado.entity";
import {PrioridadEntity} from "./prioridad.entity";
import {JwtModule} from "@nestjs/jwt";
import {UsuarioService} from "../usuario/usuario.service";

@Module({
  providers: [TicketService, UsuarioService],
  controllers: [TicketController],
  imports: [
      TypeOrmModule.forFeature(
          [TicketEntity, EstadoEntity, PrioridadEntity],
          'default'
      ),
    JwtModule.register({secret: '$up3r$3cr3t'}),

  ]
})
export class TicketModule {}
