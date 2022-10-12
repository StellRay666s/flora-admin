<template>
  <section class="section">
 
    <b-navbar-item >  
      <nuxt-link to="/authorization">
                Home</nuxt-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
  </section>
</template>

<script>
import Card from '~/components/Card'
export default {
  name: 'IndexPage',
  components: {
    Card,
  },
}
</script>