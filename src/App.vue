<template>
  <v-app dark>
     <v-navigation-drawer
      v-model="drawer"
      clipped
      right
      fixed
      app
    >
      <v-list>
        <v-list-tile v-for="sec in sections" :key="sec">
          <v-list-tile-title>{{ sec }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      dense
      flat
      clipped-left
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />

      <v-btn flat v-for="sec in sections" :key="sec">
        <span>{{ sec }}</span>
      </v-btn>
      <v-btn flat icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="pa-0">
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      title: 'AJ & Megan',
      sections: [
        'The Happy Couple',
        'Our Story',
        'Our Photos',
        'The Wedding Party',
        'Events',
        'Accommodations',
        'Registry',
      ],
    };
  },
};
</script>

<style>
.application {
  font-family: 'Dancing Script', cursive !important;
}
</style>

