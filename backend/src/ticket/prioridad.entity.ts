import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('prioridad')
export class PrioridadEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 50,
    })
    nombre: string;
}