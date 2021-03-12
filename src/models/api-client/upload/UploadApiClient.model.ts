//import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { UploadApiClientUrlsInterface } from './UploadApiClientUrls.interface'
import { UploadApiClientInterface } from './UploadApiClient.interface'
import { UploadInterface } from '@/models/upload/Upload.interface'
/**
* @Name UPLOADApiClientModel
* @description
* Реализует интерфейс UlploadApiClientInterface

*/
export class UploadApiClientModel implements UploadApiClientInterface {

    private readonly urls!: UploadApiClientUrlsInterface
    constructor(urls: UploadApiClientUrlsInterface) {
        this.urls = urls
    }

    fetchItems(data: FormData): Promise<UploadInterface> {
       // return new Promise<ItemInterface[]>((resolve) => {
            const getParameters: HttpRequestParamsInterface = {
                url: this.urls.fetchItems,
                requiresToken: false,
                payload: data
            }
            return HttpClient.post<UploadInterface>(getParameters)
           
       // })
    }
}