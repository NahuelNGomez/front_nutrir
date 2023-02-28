import { apiProvider } from "../../src/dataFetch/provider";

const merenderosDataFetch = (token: string): Promise<any> => {
  const path = 'comedor/responsable'
  return apiProvider.get(path, token)
}

const passwordPost = (body: {}, token: string): Promise<any> => {
  const path = 'user/sesion/password/change/'
  return apiProvider.post(path, body, token)
}


export {
  merenderosDataFetch,
  passwordPost
}