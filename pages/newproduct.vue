<template>
  <div>
    <TheHeader />
    <div class="wrapper-product">
      <div class="first-block">
        <b-field style="width: 300px" label="Title">
          <b-input type="text" v-model="bouquet.title"></b-input>
        </b-field>
        <b-field label="Subtitle">
          <b-input
            style="width: 200px"
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
        <b-field label="Image">
          <div class="image">
            <img :src="base64prefix + bouquet.image" />
            <b-input
              type="textarea"
              class="area"
              v-model="bouquet.image"
            ></b-input>
          </div>
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
      </div>
      <b-button class="btn" @click="addProduct" type="is-primary"
        >Добавить</b-button
      >
    </div>
  </div>
</template>

<script>
import { postBouquet } from '~/requests/postBouquet'

export default {
  data() {
    return {
      bouquet: {
        title: '',
        subTitle: '',
        description: '',
        price: null,
        image: '',
        rating: null,
        width: null,
        height: null,
      },
      base64prefix: 'data:image/png;base64, ',
    }
  },

  methods: {
    async addProduct() {
      const response = await postBouquet(
        this.bouquet.title,
        this.bouquet.description,
        this.bouquet.height,
        this.bouquet.image,
        this.bouquet.price,
        this.bouquet.rating,
        this.bouquet.subTitle,
        this.bouquet.width
      )
      if (response.status === 200) {
        this.$buefy.notification.open({
          message: 'Успешно добавлено!',
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
  .image {
    display: grid;
    grid-template-columns: 200px 500px;
    column-gap: 20px;
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
