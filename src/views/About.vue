<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
        <button @click="link()"> link</button>
    </p>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    export default class About extends Vue {
      private link() {
        this.$router.push('/');
      }
    }
</script>