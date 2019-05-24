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
import { authStoreModule } from '@/store/modules/auth';
import router from '../router';
@Component
export default class Confirm extends Vue{
    email: string = "";
    confirmationCode: string = "";

    private confirm() {
        if (authStoreModule.signUpConfirm(this.email, this.confirmationCode)){
            router.push('/login');
        }
    }
}
</script>