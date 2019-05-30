import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module,
} from 'vuex-module-decorators';
import store from '@/store';

@Module({
    dynamic: true,
    store,
    name: 'auth',
    namespaced: true,
})
class AuthStore extends VuexModule {
    public username: string = '';
    // mutation
    @Mutation
    public SET_USERNAME(username: string) {
        this.username = username;
    }


    get GET_USERNAME(): string {
        return this.username;
    }
}
export const authStoreModule = getModule(AuthStore);
