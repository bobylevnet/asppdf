

import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'

import usersApiClient from './users'
import uploadApiClient from './upload'
import targertApiClient from './target'
import baseApiClient from './base'

// Создаём экземпляр основного ApiClient, который будет обёрткой для фиктивных клиентов.
const apiLiveClient: ApiClientInterface = {
    users: usersApiClient,
    upload: uploadApiClient,
    target: baseApiClient,
    base: baseApiClient
}
// Экспортируем экземпляр.
export default  apiLiveClient 