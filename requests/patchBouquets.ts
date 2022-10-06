import { axiosClient } from '~/utils/axiosClient'

async function patchClient(_id: string) {
  const response = await axiosClient.patch(`/bouquet/${_id}`)
  return response
}

export { patchClient }
