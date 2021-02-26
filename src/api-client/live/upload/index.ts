import { UploadApiClientInterface, UploadApiClientModel, UploadApiClientUrlsInterface } from '@/models/api-client/upload'

const urls: UploadApiClientUrlsInterface = {
    fetchItems: `http://localhost:8080/route?rest={"model": "files", "action": "upload"}
    &datajs={}`
}
// Создаём экземпляр ItemsApiClient с url, который возвращает фиктивные данные из ст\атического JSON - файла.
const uploadApiClient: UploadApiClientInterface = new UploadApiClientModel(urls)
// Экспортируем объект.
export default uploadApiClient