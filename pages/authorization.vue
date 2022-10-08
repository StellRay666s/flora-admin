<template>
  <div>
    <h1>Admin Login</h1>
    <div class="wrapper">
      <b-field label="Email">
        <b-input type="email" v-model="email"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <b-button @click="login" type="is-primary" expanded>Войти</b-button>
    </div>
  </div>
</template>

<script>
import { postAutentication } from '@/requests/postAutentication'

export default {
  name: 'authorization',

  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const response = await postAutentication(this.email, this.password)
      const accessToken = response.data.accessToken
      localStorage.setItem('accessToken', accessToken)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
  text-align: center;
  margin-top: 30px
}

.wrapper {
  width: 400px;
  height: 300px;
  border: 1px solid grey;
  grid-template-rows: 90px 100px 100px;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
}
</style>