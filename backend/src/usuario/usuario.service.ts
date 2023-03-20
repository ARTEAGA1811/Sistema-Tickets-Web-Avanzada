import { Injectable } from '@nestjs/common';
import {DataSource, FindManyOptions} from "typeorm";
import {InjectDataSource} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {UsuarioUpdateDto} from "./dto/usuario-update.dto";

@Injectable()
export class UsuarioService {
    constructor(@InjectDataSource() public datasource: DataSource){

    }

    public usuarioRepository = this.datasource.getRepository(UsuarioEntity);
    find(opciones: FindManyOptions<UsuarioEntity>){
        return this.usuarioRepository.find(opciones);
    }

    findOneById(id: number){
        return this.usuarioRepository.findOne({
            select: ['id', 'nombreUsuario', 'correo', 'rol'],
            where: {
                id: id
            },
            relations: ['rol']
        });
    }

    findOneByNombre(nombre: string){
        return this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombre
            },
            relations: ['rol']
        });
    }
    create(datosCreacion: UsuarioEntity){
        return this.usuarioRepository.save(datosCreacion);
    }

    update(id: number, nuevo: UsuarioUpdateDto){
        return this.usuarioRepository.save({...nuevo, id})
    }

    async tieneRol(nombreRol: string, nombreUsuario: string){
        const usuario = await this.findOneByNombre(nombreUsuario);
        if(!usuario){
            console.log('No existe usuario')
            return false;
        }
        if(!usuario.rol){
            console.log(nombreUsuario + 'No tiene rol y el rol buscado es ' + nombreRol)
            return false;
        }

        console.log("Este usuario tiene el rol " + usuario.rol.nombre )
        return usuario.rol.nombre === nombreRol;
    }

    async buscarSoporteDisponible(){
        const usuarios = await this.find({
            where: {
                rol: {
                    nombre: 'Soporte'
                }
            },
            relations: ['rol']
        });

        console.log("usuarios " + usuarios)
        return usuarios[Math.floor(Math.random() * usuarios.length)]
    }

}
