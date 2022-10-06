import { axiosClient } from '~/utils/axiosClient'

async function getBouquet(_id: string) {
  const response = await axiosClient.get<Bouquet>(`/bouquets/${_id}`)
  return response
}

export { getBouquet }
