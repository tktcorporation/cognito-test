<template lang="pug">
    .box
        form#confirm(@submit.prevent="confirm()")
            .field
                .control
                    input.input(placeholder="Email" autofocus="" v-model="email")
            .field
                .control
                    input.input(placeholder="Confirmation Code" autofocus="" v-model="confirmationCode")
            button.button.is-block.is-info.is-large.is-fullwidth Confirm
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Amplify, { Auth } from 'aws-amplify';
import router from '../router';
@Component
export default class Confirm extends Vue{
    email: string = "";
    confirmationCode: string = "";

    private confirm() {
        const confirmParams = {
            email: this.email,
            code: this.confirmationCode
        }
        Auth.confirmSignUp(confirmParams.email, confirmParams.code)
            .then((data: any) => {
                console.log(data);
                alert('ユーザ登録が完了しました。');
                router.push('/login');
            })
            .catch((err: any) => {
                alert('検証に失敗しました');
            });

    }
}
</script>