<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <h1>Список пользователей:</h1>
      <b-table :data="users" :columns="columns" />
      <div class="paginate">
        <b-pagination
          :total="total"
          v-model="current"
          :order="order"
          :per-page="perPage"
          :size="size"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import { getUsers } from '@/requests/getUsers'

export default {
  name: 'UserPage',
  components: { TheHeader },

  data() {
    return {
      users: [
        {
          name: '',
          email: '',
          phone: '',
          address: '',
        },
      ],
      columns: [
        { label: 'email', field: 'email', width: 200, centered: true },
        { label: 'name', field: 'name', width: 200, centered: true },
        { label: 'phone', field: 'phone', width: 200, centered: true },
        { label: 'address', field: 'address', width: 200, centered: true },
      ],
      total: 0,
      current: 1,
      perPage: 10,
      order: 'is-centered',
      countSkip: 0,
      size: 'is-small',
    }
  },
  watch: {
    current: function (newCurrent, oldCurrent) {
      if (newCurrent > oldCurrent) {
        this.nextPage()
      } else {
        this.prevPage()
      }
    },
  },
  methods: {
    async nextPage() {
      getUsers((this.countSkip = this.perPage * this.current))
      const response = await getUsers(this.current)
      this.users = response.data.data
      this.strikeDash()
    },

    async prevPage() {
      getUsers((this.countItem -= 10))
      const response = await getUsers(this.current)
      this.users = response.data.data
      this.strikeDash()
    },

    strikeDash() {
      this.users.map((user) =>
        user.hasOwnProperty('name') ? user : (user.name = '____')
      )
      this.users.map((user) =>
        user.hasOwnProperty('address') ? user : (user.address = '____')
      )
      this.users.map((user) =>
        user.hasOwnProperty('phone') ? user : (user.phone = '____')
      )
      this.users.map((user) =>
        user.hasOwnProperty('email') ? user : (user.email = '____')
      )
    },
  },

  mounted() {
    this.$nextTick(async function fetchUsers() {
      const response = await getUsers(this.countSkip)
      this.users = response.data.data
      this.total = response.data.total
      this.strikeDash()
    })
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  border: 1px solid #7a7a7a;
  padding: 20px 20px;
  .paginate {
    margin-top: 20px;
  }

  h1 {
    font-size: 22px;
  }
}
</style>
