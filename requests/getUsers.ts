import { axiosClient } from '@/utils/axiosClient'

async function getUsers(skip: number = 0) {
  const response = await axiosClient.get<User[]>("/users",{
    params:{
        $skip:skip
    }
  })
  return response
}

export { getUsers }
