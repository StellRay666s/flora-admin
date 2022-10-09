interface Bouquet {
  createdAt: string
  descripttion: string
  height: number
  image: string
  isNew: boolean
  price: number
  rating: number
  subTitle: string
  title: string
  width: number
  __v: number
  _id: string
}

interface User {
  user: {
    id: number
    email: string
    password: string
    address: string
    phone: number
    name: string
    isAuth: boolean
  }
}
