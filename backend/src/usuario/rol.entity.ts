import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";

@Entity('rol')
export class RolEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 50,
    })
    nombre: string;

}