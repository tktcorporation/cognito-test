
import { authStoreModule } from '@/store/modules/auth';
export default class LoginGuards{
    static isLogedin(): boolean {
        if(authStoreModule.GET_AUTH_TOKENS.accessToken == "") {
            return false;
        }
        return true;
    }
};