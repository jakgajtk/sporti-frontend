<template>
  <v-container fluid class="text-xs-center">
    <v-layout row wrap>
      <span>Login via Facebook</span>
        <v-card height="185px" flat color="white">
          <v-card-text>
            <div>
              <v-btn flat>Login</v-btn>
            </div>
          </v-card-text>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
