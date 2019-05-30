import Amplify, {
    Auth,
    API
} from 'aws-amplify';
import { authStoreModule } from '@/store/modules/auth';
const LoginGuard = async (to: any, from: any, next: any) => {
    console.log("aaaa");
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        vuex.
        console.log(user.username);
        if(to.matched.some((record: { meta: { requiresUnAuth: any; }; }) => record.meta.requiresUnAuth) ){
            console.log("ログイン画面いけない");
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
                });
            return;
        }
    } catch(err) {
        if(to.matched.some((record: { meta: { requiresAuth: any; }; }) => record.meta.requiresAuth) ){
            console.log("ログインしろよ");
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
            return;
        }
    }
    console.log("次へ");
    next()
}
export { LoginGuard }