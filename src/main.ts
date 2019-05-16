import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Amplify,{ Auth,API } from 'aws-amplify';
import config from './config';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Amplify.configure({
  Auth: {
      identityPoolId: config.IdentityPoolId, //REQUIRED - Amazon Cognito Identity Pool ID
      region: config.Region, // REQUIRED - Amazon Cognito Region
      userPoolId: config.UserPoolId, //OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: config.ClientId, //OPTIONAL - Amazon Cognito Web Client ID
  },
  // API: {
  //   endpoints: [
  //     {
  //         name: "AmplifyTest",
  //         endpoint: "https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/v1",
  //         region: "ap-northeast-1"
  //     }
  //   ]
  // }
});
