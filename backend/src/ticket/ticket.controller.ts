import {BadRequestException, Body, Controller, HttpCode, Post, UseGuards, Request, Get} from '@nestjs/common';
import {JwtGuard} from "../usuario/jwt.guard";
import {Roles, RolesGuard} from "../usuario/roles.guard";
import {validate} from "class-validator";
import {TicketService} from "./ticket.service";

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) {
    }
    @Post()
    @Roles('Usuario')
    @UseGuards(JwtGuard, RolesGuard)
    @HttpCode(201)
    async crearTicket(@Body() bodyParams, @Request() req) {
        const arregloErrores = await validate(bodyParams);
        if (arregloErrores.length > 0) {
            console.error('Errores: ', arregloErrores);
            throw new BadRequestException('No envia bien parametros');
        }

        return this.ticketService.create(bodyParams, req.user.sub)
    }

    @Get()
    @Roles('Usuario')
    @UseGuards(JwtGuard, RolesGuard)
    @HttpCode(201)
    async obtenerTickets(@Request() req) {
        return this.ticketService.obtenerTickets(req.user.sub)
    }
}
