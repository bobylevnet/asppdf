import {
    UsersApiClientUrlsInterface,
    UsersApiClientInterface,
    UsersApiClientModel
} from '@/models/api-client/users'
const urls: UsersApiClientUrlsInterface = {
    fetchItems: process.env.VUE_APP_SITE_URL + `/route?rest={"model": "target", "action": "findall"}
    &datajs={}`
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const targertApiClient: UsersApiClientInterface = new UsersApiClientModel(urls)
// Экспортируем объект.
export default targertApiClient