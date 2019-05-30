<template lang="pug">
  .home
    sideBar
    .box
      p
        button.button(@click="logout()") ログアウト
      p {{username}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Amplify, { Auth, API } from 'aws-amplify';
import { authStoreModule } from '@/store/modules/auth';
import sideBar from '@/components/SideBar.vue'
@Component({
  components: {
    sideBar
  },
})
export default class Home extends Vue {
  username: string = "";
  private mounted() {
    this.username = authStoreModule.GET_USERNAME;
    console.log(this.username);
  }
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
