<template lang='pug'>
    .container
        .column.is-4.is-offset-4
            SignUpForm
            p
                router-link(to='login') ログイン
            p
                router-link(to='/') Home

</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import SignUpForm from '@/components/SignUpForm.vue';

    @Component({
        components: {
            SignUpForm,
        },
    })
    export default class SignUp extends Vue {}
</script>