<template lang='pug'>
    .container
        .column.is-4.is-offset-4
            SignUpConfirmForm
            router-link(to='/') Home
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import SignUpConfirmForm from '@/components/SignUpConfirmForm.vue';

    @Component({
        components: {
            SignUpConfirmForm,
        },
    })
    export default class SignUpConfirm extends Vue {}
</script>