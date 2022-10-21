<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <nuxt-link tag="to" to="/"> Пользователи </nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link tag="to" to="/orders"> Заказы </nuxt-link>
      </b-navbar-item>
      <b-navbar-item
        ><nuxt-link tag="to" to="/bouquets"> Букеты</nuxt-link>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <button @click="logout" class="button is-primary">Выйти</button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheHeader',

  methods: {
    logout() {
      window.localStorage.setItem('accessToken', '')
      this.$router.push('/authorization')
      this.$store.commit('user/logoutUser', {
        id: null,
        email: null,
        password: null,
        address: null,
        phone: null,
        name: null,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
