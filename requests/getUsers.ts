import { axiosClient } from '~/utils/axiosClient'

async function getUsers() {
  const response = await axiosClient.get<User[]>('/users')
  return response
}

export { getUsers }
