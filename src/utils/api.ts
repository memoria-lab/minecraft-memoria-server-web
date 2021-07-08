import axios, { AxiosResponse } from 'axios'
import { API_BASE_URL, API_KEY } from 'constants/api'

axios.defaults.baseURL = API_BASE_URL

const restGet = async (endpoint: string): Promise<AxiosResponse<any>> => {
  return await axios(endpoint, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
}

export default restGet
