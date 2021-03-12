import {
    ItemsApiClientUrlsInterface,
    ItemsApiClientInterface,
    ItemsApiClientModel
} from '@/models/api-client/items'
const urls: ItemsApiClientUrlsInterface = {
    fetchItems: process.env.VUE_APP_SITE_URL 
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// Экспортируем объект.
export default itemsApiClient