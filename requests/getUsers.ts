import { axiosClient } from '@/utils/axiosClient'

async function getUsers(skip: number = 10) {
  const response = await axiosClient.get<User[]>(`/users?$skip=${skip}`)
  return response
}

export { getUsers }
