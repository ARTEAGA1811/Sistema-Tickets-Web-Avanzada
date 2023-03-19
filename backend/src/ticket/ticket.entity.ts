import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EstadoEntity} from "./estado.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {PrioridadEntity} from "./prioridad.entity";

@Entity(' ticket')
export class TicketEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'titulo',
        type: 'varchar',
        length: 50,
    })
    titulo: string;
    @Column({
        name: 'descripcion',
        type: 'varchar',
        length: 100,
    })
    descripcion: string;

    @Column({
        name: 'fecha_creacion',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',

    })
    fechaCreacion: Date;

    @Column({
        name: 'fecha_resolucion',
        type: 'datetime',
        nullable: true,
    })
    fechaResolucion: Date;

    @ManyToOne(() => EstadoEntity, {nullable: false})
    estado: EstadoEntity;

    @ManyToOne(() => UsuarioEntity, {nullable: false})
    usuario: UsuarioEntity;

    @ManyToOne(() => UsuarioEntity)
    soporte: UsuarioEntity;

    @ManyToOne(() => PrioridadEntity, {nullable: false})
    prioridad: PrioridadEntity;

    @Column({
        name: 'respuesta',
        type: 'varchar',
        length: 100,
        nullable: true
    })
    respuesta: string;

}