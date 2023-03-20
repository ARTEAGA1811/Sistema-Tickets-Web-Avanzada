import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('estado')
export class EstadoEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 50,
    })
    nombre: string;
}