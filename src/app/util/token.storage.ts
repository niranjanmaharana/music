export class TokenStorage {
    static token: string;
    static type: string;

    static getToken() {
        return this.token;
    }

    static setToken(token: string) {
        this.token = token;
    }

    static getType() {
        return this.type;
    }

    static setType(type: string) {
        this.type = type;
    }
}