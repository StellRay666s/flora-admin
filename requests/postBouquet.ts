import { axiosClient } from '~/utils/axiosClient'

async function postBouquet(
  title: string,
  descripttion: string,
  height: number,
  image: string,
  price: number,
  rating: number,
  subTitle: string,
  width: number
) {
  const response = await axiosClient.post('/bouquets', {
    title: title,
    descripttion: descripttion,
    height: height,
    image: image,
    price: price,
    rating: rating,
    subTitle: subTitle,
    width: width,
  })

  return response
}

export { postBouquet }
