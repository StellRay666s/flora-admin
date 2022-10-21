<template>
  <div>
    <TheHeader />
    <div class="wrapper-product">
      <div class="first-block">
        <span>Id: {{ bouquet._id }}</span>
        <b-field style="width: 300px" label="Title">
          <b-input type="text" v-model="bouquet.title"></b-input>
        </b-field>
        <b-field label="Subtitle">
          <b-input
            style="width: 100px"
            type="text"
            v-model="bouquet.subTitle"
          ></b-input>
        </b-field>
        <b-field label="Description">
          <b-input
            type="textarea"
            class="area"
            v-model="bouquet.description"
          ></b-input>
        </b-field>
        <!-- <b-field label="Image">
          <img :src="base64prefix + bouquet.image" />
          <input @change="previewFiles" type="file" multiple />
        </b-field> -->
        <b-field label="Image">
          <b-input
            type="textarea"
            class="area"
            v-model="bouquet.image"
          ></b-input>
        </b-field>
      </div>
      <div class="second-block">
        <b-field label="Price">
          <b-input
            style="width: 100px"
            type="text"
            v-model="bouquet.price"
          ></b-input>
        </b-field>
        <b-field label="Rating">
          <b-input
            style="width: 100px"
            type="text"
            v-model="bouquet.rating"
          ></b-input>
        </b-field>
        <b-field label="Width">
          <b-input
            style="width: 100px"
            type="text"
            v-model="bouquet.width"
          ></b-input>
        </b-field>
        <b-field label="Height">
          <b-input
            style="width: 100px"
            type="text"
            v-model="bouquet.height"
          ></b-input>
        </b-field>
        <b-field label="Bonuses">
          <b-input
            style="width: 100px"
            type="text"
            v-model="bouquet.bonuses"
          ></b-input>
        </b-field>
      </div>
      <b-button class="btn" @click="changeData" type="is-primary"
        >Сохранить измнения</b-button
      >
    </div>
  </div>
</template>

<script>
import { getBouquet } from '@/requests/getBouquet'
import { patchBouquet } from '@/requests/patchBouquets'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: { TheHeader },

  data() {
    return {
      bouquet: {},
    }
  },

  mounted() {
    this.$nextTick(async function fetchBouquet() {
      const response = await getBouquet(this.$route.params.id)
      this.bouquet = response.data
    })
  },

  methods: {
    async changeData() {
      const response = await patchBouquet(
        this.bouquet._id,
        this.bouquet.title,
        this.bouquet.image,
        this.bouquet.subTitle,
        this.bouquet.description,
        this.bouquet.price,
        this.bouquet.width,
        this.bouquet.height,
        this.bouquet.rating
      )

      if (response.status === 200) {
        this.$buefy.notification.open({
          message: 'Успешно сохранено!',
          type: 'is-primary',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper-product {
  width: 1240px;
  margin: 0 auto;
  border: 1px solid #7a7a7a;
  border-radius: 6px;
  margin-top: 50px;
  padding: 20px;
  display: grid;
  row-gap: 10px;
  grid-template-columns: 800px 400px;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
  }

  .first-block {
    display: grid;
  }

  .second-block {
    justify-content: center;
    display: grid;
  }

  .area {
    max-width: 700px;
    min-height: 40px;
  }

  .input_min {
    width: 300px;
  }

  .btn {
    width: 200px;
  }
}
</style>
