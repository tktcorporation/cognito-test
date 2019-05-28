<template lang="pug">
    .container
        .column.is-4.is-offset-4
            LoginForm
            p
                router-link(to="/sign_up") 新規登録
            p
                router-link(to="/") Home
            p {{getToken}}
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import LoginForm from '@/components/LoginForm.vue';
    import { authStoreModule } from '@/store/modules/auth';

    @Component({
        components: {
            LoginForm,
        },
    })
    export default class Login extends Vue {
        get getToken() {
            return authStoreModule.GET_AUTH_TOKENS
        }
    }
</script>

