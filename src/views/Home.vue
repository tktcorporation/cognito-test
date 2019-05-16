<template lang="pug">
  .home
    .box
      p
        router-link(to="/login") ログイン
      p
        router-link(to="/sign_up") 新規登録
      p
        button.button.is-info(v-on:click="getTokens") show tokens
    p {{tokens}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  tokens: any = {

  };
  private getTokens(){
    this.tokens = this.$store.state.authTokens;
    console.log(this.tokens);
  }
}
</script>
