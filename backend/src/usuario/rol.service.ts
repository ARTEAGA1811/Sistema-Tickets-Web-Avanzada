import {Injectable, OnApplicationBootstrap} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RolEntity} from "./rol.entity";

@Injectable()
export class RolService implements OnApplicationBootstrap{
    public arregloRoles = [{id: 1, nombre: 'Soporte'}, {id: 2, nombre: 'Usuario'}];

    constructor(@InjectRepository(RolEntity) private readonly rolRepository: Repository<RolEntity>) {
    }
    async onApplicationBootstrap() {
        const roles = await this.rolRepository.find();
        if(roles.length === 0){
            await this.rolRepository.save(this.arregloRoles);
        }
    }

}