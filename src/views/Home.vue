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
import { AuthTokens } from '@/store/modules/auth';
import { authStoreModule } from '@/store/modules/auth';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  private tokens: AuthTokens = {
    idToken: '',
    accessToken: '',
    refreshToken: '',
  };
  private getTokens() {
    this.tokens = authStoreModule.GET_AUTH_TOKENS;
    console.log(this.tokens);
  }
  private logout() {
    console.log("saas");
    authStoreModule.logout();
    this.$router.push('/login');
  }
}
</script>
