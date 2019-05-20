
import store from '../store';
export default class LoginGuards{
    static isLogedin(): boolean {
        if(store.getters.accessToken == "") {
            return false;
        }
        return true;
    }
};