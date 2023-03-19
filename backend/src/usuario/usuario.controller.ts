import {BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate} from "class-validator";
import {InjectRepository} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";
import {Repository} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService, @InjectRepository(RolEntity) private readonly rolRepository: Repository<RolEntity>) {
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(@Param() params){
        return this.usuarioService.findOneById(+params.id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() bodyParams){
        console.log(`Post con parametros: ${bodyParams.nombre} ${bodyParams.contrasena} ${bodyParams.correo}`)

        console.log('Nuevo usuario: ', bodyParams);
        const arregloErrores = await validate(bodyParams);
        if(arregloErrores.length > 0) {
            console.error('Errores: ', arregloErrores);
            throw new BadRequestException('No envia bien parametros');
        }


        const nuevoUsuario = new UsuarioEntity();
        nuevoUsuario.nombreUsuario = bodyParams.nombre;
        nuevoUsuario.correo = bodyParams.correo;
        nuevoUsuario.contrasena = bodyParams.contrasena;
        nuevoUsuario.rol = await this.rolRepository.findOne({where: {nombre: bodyParams.rol}});

        return this.usuarioService.create(nuevoUsuario);

    }

    @Put("/:id")
    @HttpCode(200)
    async update(@Param() params, @Body() bodyParams){
        console.log(`Put con parametros: ${params.id} ${bodyParams.contrasena} ${bodyParams.correo}`)
        const arregloErrores = await validate(bodyParams);
        if(arregloErrores.length > 0) {
            console.error('Errores: ', arregloErrores);
            throw new BadRequestException('No envia bien parametros');
        }

        return this.usuarioService.update(+params.id, bodyParams);
    }
}
