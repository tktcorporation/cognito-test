import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module,
} from 'vuex-module-decorators';
import store from '@/store';
import Amplify, {
    Auth,
    API,
} from 'aws-amplify';
import {
    SignUpParams,
} from '@aws-amplify/auth/lib/types';

// state's interface
export interface UserAttributes {
    email: string;
}
export interface AuthTokens {
    idToken: string;
    accessToken: string;
    refreshToken: string;
}
@Module({
    dynamic: true,
    store,
    name: 'auth',
    namespaced: true,
})
class AuthStore extends VuexModule implements UserAttributes, AuthTokens {
    // state
    // userAttributes: UserAttributes = {
    //     email: '',
    // };
    // authTokens: AuthTokens = {
    //     idToken: '',
    //     accessToken: '',
    //     refreshToken: '',
    // };
    public email: string = '';
    public idToken: string = '';
    public accessToken: string = '';
    public refreshToken: string = '';
    // mutation
    @Mutation
    public SET_USER_ATTRIBUTES(userAttributes: UserAttributes) {
        this.email = userAttributes.email;
    }
    @Mutation
    public SET_AUTH_TOKENS(authTokens: AuthTokens) {
        this.idToken = authTokens.idToken;
        this.accessToken = authTokens.accessToken;
        this.refreshToken = authTokens.refreshToken;
    }
    @Mutation
    public SET_AUTH_TOKRNS_BLANK() {
        this.idToken = '';
        this.accessToken = '';
        this.refreshToken = '';
    }
    // actions
    @Action({})
    public signUp(signUpParams: SignUpParams): boolean {
        Auth.signUp(signUpParams)
            .then((data: any) => {
                const userAttributes: UserAttributes = {
                    email: data.user.username,
                };
                this.SET_USER_ATTRIBUTES(userAttributes);
                return true;
            })
            .catch((err: any) => {
                return false;
            });
        return false;
    }

    @Action({})
    public signUpConfirm(confirmParams: { email: string, code: string }): boolean {
        Auth.confirmSignUp(confirmParams.email, confirmParams.code)
            .then((data: any) => {
                if (data === 'SUCCESS') {
                    alert('ユーザ登録が完了しました。');
                    return true;
                } else {
                    return false;
                }
            })
            .catch((err: any) => {
                alert('検証に失敗しました');
                return false;
            });
        return false;
    }
    @Action({})
    public login(loginParams: { email: string, password: string }): boolean {
        Auth.signIn(loginParams.email, loginParams.password)
            .then((data) => {
                const authTokens: AuthTokens = {
                    idToken: data.signInUserSession.getIdToken().getJwtToken(),
                    accessToken: data.signInUserSession.getAccessToken().getJwtToken(),
                    refreshToken: data.signInUserSession.getRefreshToken().getToken(),
                };
                this.SET_AUTH_TOKENS(authTokens);
                console.log(this.GET_AUTH_TOKENS);
                alert('サインインに成功しました');
                return true;
            })
            .catch((err) => {
                alert('サインインに失敗しました');
                return false;
            });
        return false;
    }
    @Action({})
    public logout() {
        this.SET_AUTH_TOKRNS_BLANK();
    }

    get GET_EMAIL(): string {
        return this.email;
    }
    get GET_AUTH_TOKENS(): AuthTokens {
        console.log(this.idToken);
        const authTokens: AuthTokens = {
            idToken: this.idToken,
            accessToken: this.accessToken,
            refreshToken: this.refreshToken,
        };
        return authTokens;

        // return this.idToken;
    }
}
export const authStoreModule = getModule(AuthStore);
