import { axiosClient } from '~/utils/axiosClient'

interface User {
  email: string
  name: string
  address: string
  phone: number
}

async function getUsers() {
  const response = await axiosClient.get<User[]>('/users')
  return response
}

export { getUsers }
