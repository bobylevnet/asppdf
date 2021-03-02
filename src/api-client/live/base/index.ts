import {
    BaseApiClientUrlsInterface,
    BaseApiClientInterface,
    BaseApiClientModel
} from '@/models/api-client/base'


const urls: BaseApiClientUrlsInterface = {
    baseurl: `http://localhost:8080/route?rest=`
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const itemsApiClient: BaseApiClientInterface = new BaseApiClientModel(urls)
// Экспортируем объект.
export default itemsApiClient