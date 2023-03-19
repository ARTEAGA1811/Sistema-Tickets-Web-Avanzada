import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {RolEntity} from "./rol.entity";

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
    rol: RolEntity;




}