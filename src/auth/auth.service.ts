import { Injectable} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';
import { readFileSync } from 'fs';


@Injectable()
export class AuthService {
    constructor( private jwtService: JwtService ) {}
    validateUser({ username , password }: AuthPayloadDto){
        const usersPath = join(__dirname, '..', 'data', 'users.json');
        const sampleUsers = JSON.parse(readFileSync(usersPath, 'utf-8'));
        const findUser = sampleUsers.users.find((user) => user.username === username)
        if (!findUser) return null;
        if (password === findUser.password) {
            const { password, ...user } = findUser;
            return this.jwtService.sign(user)
        }
        return null;
    }

}
