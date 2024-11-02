import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
    [x: string]: any;
    constructor(private jwtService: JwtService){}
        Login(credenciales: LoginAuthDto){

            let payload={email:"admin@gmail.com",id:1}
            const token = this.jwtService.sign(payload)
            return {token:token};

    }
}
