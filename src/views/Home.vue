<template lang="pug">
  .home
    sideBar
    .box
      p
        button.button(@click="logout()") ログアウト
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Amplify, { Auth, API } from 'aws-amplify';
import sideBar from '@/components/SideBar.vue'
@Component({
  components: {
    sideBar
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
