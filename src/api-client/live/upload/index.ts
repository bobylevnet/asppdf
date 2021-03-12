import { UploadApiClientInterface, UploadApiClientModel, UploadApiClientUrlsInterface } from '@/models/api-client/upload'
import stauth from "@/store/stauth"
import sttarget from "@/store/sttarget"
let iduser = stauth.state.auth.IDuser
let idtarget = sttarget.state.target

const urls: UploadApiClientUrlsInterface = {
    fetchItems: process.env.VUE_APP_SITE_URL +   `/files/upload/${iduser}/${idtarget}`
}

const uploadApiClient: UploadApiClientInterface = new UploadApiClientModel(urls)
// Экспортируем объект.
export default uploadApiClient  