import { axiosClient } from '@/utils/axiosClient'

async function getBouquets(skip:number=0) {
  const response = await axiosClient.get<Bouquet[]>('/bouquets',{
    params:{
      $skip:skip

    }

  })
  return response
}

export { getBouquets }
