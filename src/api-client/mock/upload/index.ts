import { UploadApiClientInterface, UploadApiClientModel, UploadApiClientUrlsInterface } from '@/models/api-client/upload'

const urls: UploadApiClientUrlsInterface = {
    fetchItems: ``
}
// Создаём экземпляр ItemsApiClient с url, который возвращает фиктивные данные из ст\атического JSON - файла.
const uploadApiClient: UploadApiClientInterface = new UploadApiClientModel(urls)
// Экспортируем объект.
export default uploadApiClient