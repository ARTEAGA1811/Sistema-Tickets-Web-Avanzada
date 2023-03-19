import {BadRequestException, Body, Controller, Get, HttpCode, Param, Post} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate} from "class-validator";

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {
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
        const nuevoUsuario = new UsuarioCreateDto()
        nuevoUsuario.nombreUsuario = bodyParams.nombre;
        nuevoUsuario.contrasena = bodyParams.contrasena;
        nuevoUsuario.correo = bodyParams.correo;

        console.log('Nuevo usuario: ', nuevoUsuario);
        const arregloErrores = await validate(nuevoUsuario);
        if(arregloErrores.length > 0) {
            console.error('Errores: ', arregloErrores);
            throw new BadRequestException('No envia bien parametros');
        }

        return this.usuarioService.create(nuevoUsuario);

    }
}
