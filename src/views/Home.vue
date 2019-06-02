<template lang="pug">
  //- .home
  //-   sideBar
  //-   v-container(fluid)
  //-     .box
  //-       p
  //-         button.button(@click="logout()") ログアウト
  //-       p {{username}}
  .home
    v-navigation-drawer(fixed="" clipped="" v-model="drawer" app="")
      v-list(dense="")
        v-list-tile(v-for="item in items" :key="item.text" @click="")
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title
              | {{ item.text }}
        v-subheader.mt-3.grey--text.text--darken-1 SUBSCRIPTIONS
        v-list
          v-list-tile(v-for="item in items2" :key="item.text" avatar="" @click="")
            v-list-tile-avatar
              img(:src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="")
            v-list-tile-title(v-text="item.text")
        v-list-tile.mt-3(@click="")
          v-list-tile-action
            v-icon(color="grey darken-1") add_circle_outline
          v-list-tile-title.grey--text.text--darken-1 Browse Channels
        v-list-tile(@click="")
          v-list-tile-action
            v-icon(color="grey darken-1") settings
          v-list-tile-title.grey--text.text--darken-1 Manage Subscriptions
    v-toolbar(color="red" dense="" fixed="" clipped-left="" app="")
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-icon.mx-3 fa-youtube
      v-toolbar-title.mr-5.align-center
        span.title Youtube
      v-spacer
      v-layout(row="" align-center="" style="max-width: 650px")
        v-btn(@click="logout()") ログアウト
        v-text-field(placeholder="Search..." single-line="" append-icon="search" :append-icon-cb="() => {}" color="white" hide-details="")
    v-content
      v-container(fill-height="")
        v-layout(justify-center="" align-center="")
          v-flex(shrink="")
            v-tooltip(right="")
              v-btn(icon="" large="" :href="source" target="_blank" slot="activator")
                v-icon(large="") code
              span Source
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
  drawer = true;
  items = [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ]
  items2 = [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    props = {
      source: String
    }
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
