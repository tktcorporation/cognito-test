<template lang="pug">
    .container
        .column.is-4.is-offset-4
            .box
                form#confirm(@submit.prevent="confirm()")
                    .field
                        .control
                            input.input(placeholder="Confirmation Code" autofocus="" v-model="confirmationCode")
                    button.button.is-block.is-info.is-large.is-fullwidth Confirm
            router-link(to="/") Home
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Amplify,{ Auth,API } from 'aws-amplify';
import router from '../../router';
@Component
export default class Confirm extends Vue{
    confirmationCode: string = "";

    private confirm() {
        const userToken = {
            email: this.$store.getters.email,
            code: this.confirmationCode
        }
        if (this.$store.dispatch('signUpConfirm', userToken)){
            router.push('/login');
        }
    }
}
</script>