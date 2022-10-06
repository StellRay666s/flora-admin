import { axiosClient } from '~/utils/axiosClient'

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

async function getBouquet(_id: string) {
  const response = await axiosClient.get<Bouquet>(`/bouquets/${_id}`)
}
