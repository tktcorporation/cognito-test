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
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class LoginForm extends Vue{
    email: string = "";
    password: string = "";

    private login() {
        const loginParams = {
            email: this.email,
            password: this.password,
        }
        if(this.$store.dispatch('login', loginParams)){
            this.$router.push('/')
        };
    }
}
</script>