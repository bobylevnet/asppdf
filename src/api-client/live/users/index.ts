import {
    UsersApiClientUrlsInterface,
    UsersApiClientInterface,
    UsersApiClientModel
} from '@/models/api-client/users'

import sttarget from "@/store/sttarget"


let idtarget = sttarget.state.selectedparent

const urls: UsersApiClientUrlsInterface = {
    fetchItems: process.env.VUE_APP_SITE_URL + `/users/targets/${idtarget}`  
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const usersApiClient: UsersApiClientInterface = new UsersApiClientModel(urls)
// Экспортируем объект.
export default usersApiClient