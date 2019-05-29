<template lang="pug">
    .box
        form#login(@submit.prevent='login()')
            .field
                .control
                    input.input(type='email' placeholder='Email' autofocus v-model='email' required)
            .field
                .control
                    input.input(type='password' placeholder='Password' autofocus v-model='password' required)
            button.button.is-block.is-info.is-large.is-fullwidth Login
</template>

<script lang="ts">
//password_sample: Sasasasa2:
import { Component, Vue } from 'vue-property-decorator';
import Amplify, { Auth, API } from 'aws-amplify';
import router from '../router';

@Component
export default class LoginForm extends Vue{
    email: string = "";
    password: string = "";

    private login() {
        const loginParams = {
            email: this.email,
            password: this.password,
        };
        Auth.signIn(loginParams.email, loginParams.password)
            .then((data) => {
                alert('サインインに成功しました');
                router.push('/');
            })
            .catch((err) => {
                alert('サインインに失敗しました');
            });
    }
}
</script>