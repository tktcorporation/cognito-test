<template lang="pug">
    .container
        .column.is-4.is-offset-4
            LoginForm
            router-link(to="/") Home
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import LoginForm from '@/components/LoginForm.vue';

    @Component({
        components: {
            LoginForm,
        },
    })
    export default class Login extends Vue {}
</script>

