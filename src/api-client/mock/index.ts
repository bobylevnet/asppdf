import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import { UploadApiClientModel } from '@/models/api-client/upload'
import itemsApiClient from './items'
import uploadApiClient from './upload'

// Создаём экземпляр основного ApiClient, который будет обёрткой для фиктивных клиентов.
const apiMockClient: ApiClientInterface = {
    items: itemsApiClient,
    upload: uploadApiClient,
}
// Экспортируем экземпляр.
export default apiMockClient