import { Injectable } from '@nestjs/common';
import {DataSource, FindManyOptions} from "typeorm";
import {InjectDataSource} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";

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
            where: {
                id: id
            }
        });
    }
    create(datosCreacion: UsuarioCreateDto){
        return this.usuarioRepository.save(datosCreacion);
    }
}
