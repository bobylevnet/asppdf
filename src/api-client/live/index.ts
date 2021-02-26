

import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'

import itemsApiClient from './items'
import uploadApiClient from './upload'

// Создаём экземпляр основного ApiClient, который будет обёрткой для фиктивных клиентов.
const apiLiveClient: ApiClientInterface = {
    items: itemsApiClient,
    upload: uploadApiClient
}
// Экспортируем экземпляр.
export default  apiLiveClient 