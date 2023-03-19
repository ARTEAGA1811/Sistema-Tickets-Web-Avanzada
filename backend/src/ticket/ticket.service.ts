import {Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {PrioridadEntity} from "./prioridad.entity";
import {Repository} from "typeorm";
import {EstadoEntity} from "./estado.entity";
import {TicketEntity} from "./ticket.entity";
import {TicketCreateDto} from "./dto/ticket-create.dto";
import {UsuarioService} from "../usuario/usuario.service";

@Injectable()
export class TicketService implements OnApplicationBootstrap{
    constructor(
        @InjectRepository(PrioridadEntity) private readonly prioridadRepository: Repository<PrioridadEntity>,
        @InjectRepository(EstadoEntity) private readonly estadoRepository: Repository<EstadoEntity>,
        @InjectRepository(TicketEntity) private readonly ticketRepository: Repository<TicketEntity>,
        private readonly usuarioService: UsuarioService,
    ){
    }
    public arregloPrioridades = [{id: 1, nombre: 'Baja'}, {id: 2, nombre: 'Media'}, {id: 3, nombre: 'Alta'}];
    public arregloEstados = [{id: 1, nombre: 'Abierto'}, {id: 2, nombre: 'En Proceso'}, {id: 3, nombre: 'Cerrado'}, {id: 4, nombre: "Sin prioridad"}];
    async onApplicationBootstrap() {
        const prioridades = await this.prioridadRepository.find();
        if(prioridades.length === 0){
            await this.prioridadRepository.save(this.arregloPrioridades);
        }

        const estados = await this.estadoRepository.find();
        if(estados.length === 0){
            await this.estadoRepository.save(this.arregloEstados);
        }
    }

    async create(ticket: TicketCreateDto, nombreUsuario: string) {
        const nuevoTicket = new TicketEntity();
        nuevoTicket.titulo = ticket.titulo;
        nuevoTicket.descripcion = ticket.descripcion;
        nuevoTicket.prioridad = await this.prioridadRepository.findOne({where: {nombre: ticket.prioridad}});
        nuevoTicket.usuario = await this.usuarioService.findOneByNombre(nombreUsuario)
        if(!nuevoTicket.usuario){
            console.log('Usuario ' + nombreUsuario + ' no existe');
        }
        nuevoTicket.estado = await this.estadoRepository.findOne({where: {nombre: 'Abierto'}});

        return this.ticketRepository.save(nuevoTicket);
    }
}
