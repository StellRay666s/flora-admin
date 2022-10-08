import { axiosClient } from '@/utils/axiosClient'

async function patchBouquet(
  _id: number,
  title: string,
  image: string,
  subTitle: string,
  description: string,
  price: number,
  width: number,
  height: number,
  rating: number
) {
  const response = await axiosClient.patch(`/bouquet/${_id}`, {
    title,
    image,
    subTitle,
    description,
    price,
    width,
    height,
    rating,
  })
  return response
}

export { patchBouquet }
