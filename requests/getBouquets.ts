import { axiosClient } from '@/utils/axiosClient'

async function getBouquets() {
  const response = await axiosClient.get<Bouquet[]>('/bouquets')
  return response
}

export { getBouquets }
