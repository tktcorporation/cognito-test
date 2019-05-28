import { authStoreModule } from '@/store/modules/auth';
export default class LoginGuards{
    static isLogedin(): boolean {
        console.log(authStoreModule.GET_AUTH_TOKENS)
        if(authStoreModule.GET_AUTH_TOKENS.accessToken == "") {
            return false;
        }
        return true;
    }
};