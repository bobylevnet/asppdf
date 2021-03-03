import {
    ItemsApiClientUrlsInterface,
    ItemsApiClientInterface,
    ItemsApiClientModel
} from '@/models/api-client/items'
const urls: ItemsApiClientUrlsInterface = {
    fetchItems: process.env.VUE_APP_SITE_URL + `/route?rest={"model": "target", "action": "findall"}
    &datajs={}`
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const targertApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// Экспортируем объект.
export default targertApiClient