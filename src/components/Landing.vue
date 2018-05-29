<template>
<v-app dark>
  <v-content>
    <section class="main-image">
      <v-layout
        column
        align-center
        justify-center
        fill-height
        class="white--text"
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <v-card class="elevation-0">
              <v-card-title primary-title class="layout justify-center">
                February 16, 2019
              </v-card-title>
              <v-card-text>
                <p class="headline">
                  "Our hearts were ringing
                  In the key that our souls were singing
                  As we danced in the night
                  Remember how the stars stole the night away"
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="static/img/750_8629-edit.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Our Story</div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column align-center justify-center>
        <v-flex xs12 fill-height class="photos">
          <v-carousel>
            <v-carousel-item v-for="(item,i) in pics" :src="item.src" :key="i" />
          </v-carousel>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax src="static/img/750_8586.jpg" height="1200">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">The Wedding Party</div>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/christina.jpg" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Christina ~ Matron of Honor</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/sarah.jpg" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Sarah ~ Maid of Honor</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/sarabeth.jpg" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Sarabeth ~ Bridesmaid</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/emily.jpg" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Emily ~ Bridesmaid</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/icons/android-chrome-192x192.png" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Justin ~ Best Man</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/icons/android-chrome-192x192.png" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Tommy ~ Groomsman</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/icons/android-chrome-192x192.png" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Matt ~ Groomsman</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/icons/android-chrome-192x192.png" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Brett ~ Groomsman</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0">
                    <v-card-media src="/static/img/icons/android-chrome-192x192.png" height="200px" />
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">George ~ Officient</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Events</h2>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section class="accommodations">
      <v-layout
        column
        align-center
        justify-center
        fill-height
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                Accommodations
              </v-card-title>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Registry</h2>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <!-- <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax src="static/img/us.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section> -->
  </v-content>
</v-app>
</template>
<script>
export default {
  data() {
    return {
      pics: [
        {
          src: '/static/img/750_0172-edit.JPG',
        },
        {
          src: '/static/img/750_0184.JPG',
        },
        {
          src: '/static/img/750_0250-edit.JPG',
        },
        {
          src: '/static/img/750_0277-edit.JPG',
        },
        {
          src: '/static/img/750_0289.JPG',
        },
        {
          src: '/static/img/750_0335-edit.JPG',
        },
        {
          src: '/static/img/750_8525.JPG',
        },
        {
          src: '/static/img/750_8528.JPG',
        },
        {
          src: '/static/img/750_8735-edit.JPG',
        },
      ]
    };
  },
};
</script>

<style scoped>
.headline {
  background-color: rgba(66, 66, 66, 0.6);
  padding: 5px;
}
.card {
  background-color: rgba(66, 66, 66, 0.6);
}
.photos {
  width: 100%;
}
.main-image {
  height: 700px;
  background-image: url('/static/img/main.jpg');
}
.accommodations {
  height: 800px;
  background-image: url('/static/img/750_0316.jpg');
}
</style>

