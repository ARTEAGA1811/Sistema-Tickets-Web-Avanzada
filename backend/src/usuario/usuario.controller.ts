import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Post,
    Put, SetMetadata,
    UnauthorizedException,
    UseGuards
} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate} from "class-validator";
import {InjectRepository} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";
import {Repository} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {JwtService} from "@nestjs/jwt";
import {JwtGuard} from "./jwt.guard";
import {Roles, RolesGuard} from "./roles.guard";

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService, @InjectRepository(RolEntity)
    private readonly rolRepository: Repository<RolEntity>,
    private readonly jwtService: JwtService
    ) {
    }

    @Get("/:id")
    @UseGuards(JwtGuard, RolesGuard)
    @Roles('Soporte')
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
        await this.usuarioService.create(nuevoUsuario);

        return {accessToken: this.jwtService.sign({sub: nuevoUsuario.nombreUsuario})}
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

    @Post('login')
    @HttpCode(200)
    async login(@Body() bodyParams){
        console.log(`Post con parametros: ${bodyParams.nombreUsuario} ${bodyParams.contrasena}`)
        const usuario = await this.usuarioService.findOneByNombre(bodyParams.nombreUsuario)
        if(usuario && usuario.contrasena === bodyParams.contrasena){
            return {accessToken: this.jwtService.sign({sub: usuario.nombreUsuario})}
        }else{
            if(!usuario){
                console.log('Usuario es undefined');
            }
            throw new UnauthorizedException('Credenciales incorrectas')
        }

    }
}
