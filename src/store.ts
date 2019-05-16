import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import Amplify,{ Auth,API } from 'aws-amplify';
import { SignUpParams } from '@aws-amplify/auth/lib/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAttributes: {
      email: "",
    },
    authTokens: {
      idToken: "",
      accessToken: "",
      refreshToken: "",
    }
  },
  mutations: {
    setLogin(state, userAttributes) {
      state.userAttributes = userAttributes;
    },
    login: (state, authTokens)=>{
      state.authTokens = authTokens;
    }
  },
  actions: {
    signUp: ({commit, state}, signUpParams: SignUpParams) => {
      Auth.signUp(signUpParams)
      .then((data: any) => {
        console.log(data);
        commit('setLogin', {
            email: data.user.username,
        })
      })
      .catch((err: any) => console.log(err));
    }, 
    signUpConfirm: ({commit, state}, userToken) =>{
      Auth.confirmSignUp(userToken.email, userToken.code)
      .then((data: any) => {
        console.log(data);
        if(data == "SUCCESS"){
          alert('ユーザ登録が完了しました。');
          return true;
        }else{
          return false;
        }
      })
      .catch((err: any) => {
        console.log(err);
        alert('検証に失敗しました');
        return false;
      });
    },
    login: ({commit, state}, loginParams) =>{
      Auth.signIn(loginParams.email, loginParams.password)
      .then((data) => {
        console.log(data);
        commit('login', {
          idToken: data.signInUserSession.getIdToken().getJwtToken(),//data.signInUserSession.accessToken.jwtToken,
          accessToken: data.signInUserSession.getAccessToken().getJwtToken(),//data.signInUserSession.accessToken.jwtToken,
          refreshToken: data.signInUserSession.getRefreshToken().getToken(),
        });
        alert('サインインに成功しました');
        return true;
      })
      .catch((err) => {
        console.log(err);
        alert('サインインに失敗しました');
        return false;
      });
    }
  },
  getters: {
    email: (state) => {
      return state.userAttributes.email;
    }
  },
  plugins: [createPersistedState()]
});
