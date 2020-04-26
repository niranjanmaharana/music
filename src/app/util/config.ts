import { User } from '../model/user';
import { environment } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';
import { JwtResponse } from '../model/jwt.response';

export class Configuration {
    static user: User = null;
    
    static clearToken() {
        sessionStorage.removeItem('token');
        this.user = null;
    }

    static udpateToken(jwtResponse: JwtResponse) {
        sessionStorage.setItem('token', jwtResponse.token);
        this.user = jwt_decode(jwtResponse.token);
    }

    static getApiUrl(): string {
        return environment.config.apiUrl;
    }

    static getLoginUrl(): string {
        return 'auth/signin';
    }

    static getUpdateTokenUrl(): string {
        return 'user/token';
    }

    static getUser() {
        return this.user;
    }

    static getFirstName() {
        return this.user ? this.user.firstNm : '';
    }
}