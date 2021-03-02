

import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'

import itemsApiClient from './items'
import uploadApiClient from './upload'
import targertApiClient from './target'
import baseApiClient from './base'

// Создаём экземпляр основного ApiClient, который будет обёрткой для фиктивных клиентов.
const apiLiveClient: ApiClientInterface = {
    items: itemsApiClient,
    upload: uploadApiClient,
    target: targertApiClient,
    base: baseApiClient
}
// Экспортируем экземпляр.
export default  apiLiveClient 