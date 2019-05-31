<template lang="pug">
    v-navigation-drawer.primary.lighten-3(:clipped="clipped" v-model="drawer" enable-resize-watcher="" app="" dark="")
        v-list
            v-list-group(v-for="item in items" :value="item.active" :key="item.title")
                v-list-tile.yellow--text(slot="item" :to="item.path == '#' ? '' : item.path" :exact="item.exact" active-class="red--text")
                    v-list-tile-action
                        v-icon {{ item.action }}
                    v-list-tile-content
                        v-list-tile-title {{ item.title }}
                    v-list-tile-action(v-if="item.items.length > 0")
                        v-icon keyboard_arrow_down
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component
export default class SideBar extends Vue{
    drawer = true;
    clipped = false;
    items = [
    {
        action: 'local_activity',
        title: 'Attractions',
        path: '/',
        items: [],
    },
    {
        action: 'restaurant',
        title: 'Breakfast',
        path: '/breakfast',
        items: []
    },
    ]
}
</script>