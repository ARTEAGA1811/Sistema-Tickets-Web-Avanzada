import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolEntity} from "./rol.entity";
import {TicketEntity} from "../ticket/ticket.entity";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nombre_usuario',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    nombreUsuario: string;

    @Column({
        name: 'correo',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    correo: string;

    @Column({
        name: 'contrasena',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    contrasena: string;

    @ManyToOne(
        () => RolEntity,
    )
    @JoinColumn({name: 'rolId'})
    rol: RolEntity;

    @OneToMany(() => TicketEntity, ticket => ticket.usuario)
    tickets: TicketEntity[];



}