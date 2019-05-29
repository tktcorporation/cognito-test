<template lang="pug">
  .home
    .box
      p
        button.button(@click="logout()") ログアウト
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Amplify, { Auth, API } from 'aws-amplify';
@Component({
  components: {
  },
})
export default class Home extends Vue {
  private logout() {
    Auth.signOut()
      .then(data => {
        this.$router.push('/login');
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
