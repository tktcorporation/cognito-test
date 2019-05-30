import Amplify, {
    Auth,
    API
} from 'aws-amplify';
const LoginGuard = async (to: any, from: any, next: any) => {
    console.log("aaaa");
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        // if(to.matched.some((record: { meta: { requiresAuth: any; }; }) => record.meta.requiresAuth && user === 'not authenticated') ){
        //     next({
        //         path: '/login',
        //         query: {
        //             redirect: to.fullPath
        //         }
        //         });
        //     return;
        // }
    } catch(err) {
        // next({
        //     path: '/login',
        //     query: {
        //         redirect: to.fullPath
        //     }
        // });
        return;
    }
    next()
}
export { LoginGuard }