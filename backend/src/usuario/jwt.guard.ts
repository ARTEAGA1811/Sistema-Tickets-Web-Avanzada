import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtGuard implements CanActivate{
    constructor(private readonly jwtService: JwtService) {
    }

    protected getToken(request: {headers: Record<string, string | string[]>}): string{
        const authorization = request.headers.authorization;
        if(!authorization || Array.isArray(authorization)){
            console.log("No hay cabecera de autorizacion")
            throw new Error('No hay cabecera de autorizacion');
        }

        const [_, token] = authorization.split(' ')
        return token;
    }

    canActivate(context: ExecutionContext): boolean{
        const request = context.switchToHttp().getRequest();
        try{
            const token = this.getToken(request);
            //console.log("token " + token)
            const user = this.jwtService.verify(token);
            request.user = user;
            console.log("user " + JSON.stringify(user))
            return true;
        }catch(e){
            console.log("Token invalido")
            return false;
        }
    }

}