<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <h1>Список букетов:</h1>
      <b-table :data="bouquets" :columns="columns" />
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
import TheHeader from '~/components/TheHeader.vue'
import { getBouquets } from '~/requests/getBouquets'
export default {
  name: 'BouquetsPage',
  components: { TheHeader },

  data() {
    return {
      bouquets: [],

      columns: [
        { label: 'title', field: 'title', width: 200, centered: true },
        { label: 'price', field: 'price', width: 200, centered: true },
        { label: 'rating', field: 'rating', width: 200, centered: true },
        { label: 'width', field: 'width', width: 200, centered: true },
        { label: 'height', field: 'height', width: 200, centered: true },
      ],

      total: 0,
      current: 1,
      perPage: 10,
      order: 'is-centered',
      countSkip: 0,
      size: 'is-small',
    }
  },

  mounted() {
    this.$nextTick(async function fetchBouquets() {
      const response = await getBouquets()
      this.bouquets = response.data.data
    })
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
      getBouquets((this.countSkip = this.perPage * this.current))
      const response = await getUsers(this.current)
      this.bouquets = response.data.data
    },

    async prevPage() {
      getBouquets((this.countItem -= 10))
      const response = await getBouquets(this.current)
      this.bouquets = response.data.data
    },
  },
}
</script>

<style lang="scss" scoped></style>
