import {
    BaseApiClientUrlsInterface,
    BaseApiClientInterface,
    BaseApiClientModel
} from '@/models/api-client/base'


const urls: BaseApiClientUrlsInterface = {
    baseurl: process.env.VUE_APP_SITE_URL,
    authurl: process.env.VUE_APP_SITE_URL + `/auth`
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const itemsApiClient: BaseApiClientInterface = new BaseApiClientModel(urls)
// Экспортируем объект.
export default itemsApiClient