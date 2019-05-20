<template lang="pug">
  .home
    .box
      p
        button.button(@click="logout()") ログアウト
      p
        button.button.is-info(v-on:click="getTokens") show tokens
    p {{tokens}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { AuthTokens } from '../vuex_modules/auth';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private tokens: AuthTokens = {
    idToken: '',
    accessToken: '',
    refreshToken: '',
  };
  private getTokens() {
    this.tokens = this.$store.state.authTokens;
  }
  private logout() {
    this.$store.dispatch('logout');
    this.$router.push('login');
  }
}
</script>
