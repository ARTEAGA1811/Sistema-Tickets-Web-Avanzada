import {CanActivate, ExecutionContext, Injectable, SetMetadata} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {UsuarioService} from "./usuario.service";

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private usuarioService: UsuarioService){
    }

    async canActivate(context: ExecutionContext){
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if(!roles){
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user.sub;

        let hasRole = false

        for(let i = 0; i < roles.length; i++){
            if(await this.usuarioService.tieneRol(roles[i], user)){
                hasRole = true
                break
            }
        }
        console.log("hasRole " + hasRole)
        if(!hasRole){
            console.log("No tiene roles" + roles)
        }
        return user && hasRole;
    }
}