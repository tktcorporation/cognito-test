<template lang="pug">
    .box
        form#sign_up(@submit.prevent='signUp()')
            //- .field
            //-     .control
            //-         input.input(placeholder='Nickname' autofocus v-model='nickname')
            .field
                .control
                    input.input(type='email' placeholder='Email' autofocus v-model='email' required)
            .field
                .control
                    input.input(type='password' placeholder='Password' autofocus v-model='password' required)
            .field
                .control
                    input.input(type='password' placeholder='Password Confirm' autofocus required v-model='passwordConfirm')
            button.button.is-block.is-info.is-large.is-fullwidth SignUp
</template>

<script lang="ts">
// Sasasasa2:
import {Component, Vue} from 'vue-property-decorator';
import { authStoreModule } from '@/store/modules/auth';
@Component
export default class SignUpForm extends Vue{
    // nickname: string = "";
    email: string = "";
    password: string = "";
    passwordConfirm: string = "";

    private signUp() {
        if(!this.password || !this.passwordConfirm || this.password != this.passwordConfirm) {
            return;
        }
        const signUpParams = {
            username: this.email,
            password: this.password,
            attributes: {
                // nickname: this.nickname
            }
        }
        
        if(authStoreModule.signUp(signUpParams)){
            this.$router.push('sign_up/confirm');
        };
    }
}
</script>